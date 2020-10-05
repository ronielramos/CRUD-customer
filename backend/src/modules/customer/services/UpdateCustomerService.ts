/* eslint-disable no-useless-constructor */
import { inject, injectable } from 'tsyringe'

import IGetCustomerDTO from '../dtos/IGetCustormerDTO'
import IUpdateCustomerDTO from '../dtos/IUpdatedCustomerDTO'
import ICustomerRepository from '../repositories/ICustomerRepository'

@injectable()
export default class UpdateCustomerService {
  constructor (
    @inject('CustomerRepository')
    private customerRepository: ICustomerRepository
  ) {}

  public async execute (id: string, customerData: IUpdateCustomerDTO): Promise<IGetCustomerDTO> {
    const updatedCustomer = await this.customerRepository.update(id, customerData)
    return updatedCustomer
  }
}
