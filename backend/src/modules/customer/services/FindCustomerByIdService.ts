/* eslint-disable no-useless-constructor */
import { inject, injectable } from 'tsyringe'

import IGetCustomerDTO from '../dtos/IGetCustormerDTO'
import ICustomerRepository from '../repositories/ICustomerRepository'

@injectable()
export default class FindCustomerByIdService {
  constructor (
    @inject('CustomerRepository')
    private customerRepository: ICustomerRepository
  ) {}

  public async execute (id: string): Promise<IGetCustomerDTO | undefined> {
    const customer = await this.customerRepository.findById(id)
    return customer
  }
}
