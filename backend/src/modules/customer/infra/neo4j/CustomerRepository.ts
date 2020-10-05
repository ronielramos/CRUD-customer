import neo4j, { Driver, QueryResult, SessionMode } from 'neo4j-driver'

import neo4jDriver from '../../../../shared/infra/neo4j'
import ICreateCustomerDTO from '../../dtos/ICreateCustomerDTO'
import IGetCustomerDTO from '../../dtos/IGetCustormerDTO'
import IUpdateCustomerDTO from '../../dtos/IUpdatedCustomerDTO'
import ICustomerRepository from '../../repositories/ICustomerRepository'

export default class CustomerRepository implements ICustomerRepository {
  private driver: Driver
  private READ: SessionMode
  private WRITE: SessionMode

  constructor () {
    this.driver = neo4jDriver
    this.READ = neo4j.session.READ
    this.WRITE = neo4j.session.WRITE
  }

  private formatDateForNeo4j (date: Date | string) {
    const validDateObj = new Date(date)

    const year = validDateObj.getFullYear()
    const month = validDateObj.getMonth()
    const day = validDateObj.getDate()

    const dateNeo4J = new neo4j.types.Date(year, month, day)

    return dateNeo4J
  }

  private formatCustomer (queryResult: QueryResult): IGetCustomerDTO[] {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const records = queryResult.records.map(record => record.toObject() as any)

    const customers: IGetCustomerDTO[] = records.map(record => {
      return {
        ...record.customer.properties,
        birthdate: new Date(record.customer.properties.birthdate as Date),
        createdAt: new Date(record.customer.properties.createdAt as Date)
      }
    })

    return customers
  }

  async create (customerData: ICreateCustomerDTO): Promise<IGetCustomerDTO> {
    const session = this.driver.session({ defaultAccessMode: this.READ })

    const customerToCreate = {
      ...customerData,
      active: true,
      birthdate: this.formatDateForNeo4j(customerData.birthdate)
    }

    const query = `
      MERGE (customer: Customer {
        id: apoc.create.uuid(),
        CPF: $CPF,
        active: $active,
        birthdate: date($birthdate),
        createdAt: datetime(),
        email: $email,
        name: $name,
        phone: $phone
      })

      RETURN customer
      LIMIT 1
    `

    const result = await session.run(query, customerToCreate)
    await session.close()

    const customers = this.formatCustomer(result)

    return customers[0]
  }

  async findById (id: string): Promise<IGetCustomerDTO | undefined> {
    const session = this.driver.session({ defaultAccessMode: this.WRITE })

    const query = `
      MATCH (customer: Customer)
      WHERE customer.id = $id
      RETURN customer
      LIMIT 1
    `

    const result = await session.run(query, { id })
    await session.close()

    const customers = this.formatCustomer(result)

    return customers[0]
  }

  async find (name?: string, limit = 10, skip = 0): Promise<IGetCustomerDTO[]> {
    const session = this.driver.session({ defaultAccessMode: this.WRITE })

    const whereName = name ? 'WHERE customer.name =~ "$name.*"' : ''

    const query = `
      MATCH (customer: Customer)
      ${whereName}
      RETURN customer
      SKIP $skip
      LIMIT $limit
    `

    const result = await session.run(query, { limit, name, skip })
    await session.close()

    const customers = this.formatCustomer(result)

    return customers
  }

  async remove (id: string): Promise<{ removed: boolean }> {
    const session = this.driver.session({ defaultAccessMode: this.WRITE })

    const query = `
      MATCH (customer: Customer)
      WHERE customer.id = $id
      DELETE customer
    `

    await session.run(query, { id })
    await session.close()

    return { removed: true }
  }

  async update (id: string, customerData: IUpdateCustomerDTO): Promise<IGetCustomerDTO> {
    const session = this.driver.session({ defaultAccessMode: this.WRITE })

    const query = `
      MATCH (customer: Customer { id: $id })
      SET customer += {
        birthdate: date($birthdate),
        email: $email,
        name: $name,
        phone: $phone
      }
      RETURN customer
      LIMIT 1
    `

    const parameters = {
      ...customerData,
      birthdate: this.formatDateForNeo4j(customerData.birthdate),
      id
    }

    const result = await session.run(query, parameters)
    await session.close()

    const customers = this.formatCustomer(result)

    return customers[0]
  }
}
