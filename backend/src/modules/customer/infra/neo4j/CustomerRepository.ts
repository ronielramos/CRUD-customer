import ICustomerRepository from '../../repositories/ICustomerRepository'
import neo4j, { Driver } from 'neo4j-driver'
import neo4jDriver from '../../../../shared/infra/neo4j/index'
import ICreateCustomerDTO from '../../dtos/ICreateCustomerDTO'
import IGetCustomerDTO from '../../dtos/IGetCustormerDTO'
import IUpdateCustomerDTO from '../../dtos/IUpdatedCustomerDTO'

class CustomerRepository implements ICustomerRepository {
  private driver: Driver

  constructor () {
    this.driver = neo4jDriver
  }

  async create (customerData: ICreateCustomerDTO): Promise<IGetCustomerDTO> {
    const session = this.driver.session({ defaultAccessMode: neo4j.session.READ })

    const query = `
      MERGE (customer:Customer {
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

    const result = await session.run(query, { ...customerData })

    await session.close()

    const createdCustomer = result.records.map(record => record.toObject() as IGetCustomerDTO)

    return createdCustomer[0]
  }

  async findById (id: string): Promise<IGetCustomerDTO | undefined> {

  }

  async findByName (name: string): Promise<IGetCustomerDTO[]> {

  }

  async remove (id: string): Promise<boolean> {

  }

  async update (id: string, customerData: IUpdateCustomerDTO): Promise<IGetCustomerDTO> {

  }
}

export default CustomerRepository
