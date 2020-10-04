import neo4j, { Driver, SessionMode } from 'neo4j-driver'
import uuid from 'uuid'

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

  async create (customerData: ICreateCustomerDTO): Promise<IGetCustomerDTO> {
    const session = this.driver.session({ defaultAccessMode: this.READ })

    const customerToCreate = {
      ...customerData,
      createdAt: new Date().toISOString(),
      id: uuid.v4()
    }

    const query = `
      MERGE (customer: Customer {
        id: $id,
        CPF: $CPF,
        active: $active,
        birthdate: date($birthdate),
        createdAt: date($createdAt),
        email: $email,
        name: $name,
        phone: $phone
      })

      RETURN customer
    `

    const result = await session.run(query, customerToCreate)
    await session.close()

    const createdCustomer = result.records.map(record => record.toObject() as IGetCustomerDTO)

    return createdCustomer[0]
  }

  async findById (id: string): Promise<IGetCustomerDTO | undefined> {
    const session = this.driver.session({ defaultAccessMode: this.WRITE })

    const query = `
      MATCH (customer: Customer)
      WHERE customer.id = $id
      RETURN customer
    `

    const result = await session.run(query, { id })
    await session.close()

    const customers = result.records.map(record => record.toObject() as IGetCustomerDTO)

    return customers[0]
  }

  async findByName (name: string): Promise<IGetCustomerDTO[]> {
    const session = this.driver.session({ defaultAccessMode: this.WRITE })

    const query = `
      MATCH (customer: Customer)
      WHERE customer.name =~ '$name.*'
      RETURN customer
    `

    const result = await session.run(query, { name })
    await session.close()

    const customers = result.records.map(record => record.toObject() as IGetCustomerDTO)

    return customers
  }

  async remove (id: string): Promise<boolean> {
    const session = this.driver.session({ defaultAccessMode: this.WRITE })

    const query = `
      MATCH (customer: Customer { id: $id })
      DELETE customer
      RETURN customer.id as id
    `

    const result = await session.run(query, { id })
    await session.close()

    const record = result.records[0]

    return !!record.get('id')
  }

  async update (id: string, customerData: IUpdateCustomerDTO): Promise<IGetCustomerDTO> {
    const session = this.driver.session({ defaultAccessMode: this.WRITE })

    const query = `
      MATCH (customer: Customer { id: $id })
      SET
        birthdate = date($birthdate)
        email = $email
        name = $name
        phone = $phone
      })

      RETURN customer
    `

    const result = await session.run(query, { ...customerData, id })
    await session.close()

    const updatedCustomer = result.records.map(record => record.toObject() as IGetCustomerDTO)

    return updatedCustomer[0]
  }
}
