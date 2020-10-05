/* eslint-disable no-useless-constructor */
import { inject, injectable } from 'tsyringe'

import ICreateCustomerDTO from '../dtos/ICreateCustomerDTO'
import IGetCustomerDTO from '../dtos/IGetCustormerDTO'
import ICustomerRepository from '../repositories/ICustomerRepository'

@injectable()
export default class CreateCustomerService {
  constructor (
    @inject('CustomerRepository')
    private customerRepository: ICustomerRepository
  ) {}

  public async execute (customerData: ICreateCustomerDTO): Promise<IGetCustomerDTO> {
    const createdCustomer = await this.customerRepository.create(customerData)
    return createdCustomer
  }
}
