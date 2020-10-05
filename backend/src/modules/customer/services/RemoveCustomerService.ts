/* eslint-disable no-useless-constructor */
import { inject, injectable } from 'tsyringe'

import ICustomerRepository from '../repositories/ICustomerRepository'

@injectable()
export default class RemoveCustomerService {
  constructor (
    @inject('CustomerRepository')
    private customerRepository: ICustomerRepository
  ) {}

  public async execute (id: string): Promise<{ removed: boolean }> {
    const deletedCustomer = await this.customerRepository.remove(id)
    return deletedCustomer
  }
}
