/* eslint-disable no-useless-constructor */
import { inject, injectable } from 'tsyringe'

import IGetCustomerDTO from '../dtos/IGetCustormerDTO'
import ICustomerRepository from '../repositories/ICustomerRepository'

@injectable()
export default class FindCustomerService {
  constructor (
    @inject('CustomerRepository')
    private customerRepository: ICustomerRepository
  ) {}

  public async execute (name?: string, limit?: string, skip?: string): Promise<IGetCustomerDTO[]> {
    const validLimit = limit
      ? +limit
      : undefined

    const validSkip = skip
      ? +skip
      : undefined

    const customers = await this.customerRepository.find(name, validLimit, validSkip)
    return customers
  }
}
