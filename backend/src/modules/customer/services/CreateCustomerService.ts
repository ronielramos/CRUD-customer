/* eslint-disable no-useless-constructor */
import { inject, injectable } from 'tsyringe'
import JoiValidatorProvider
  from '../../../shared/container/providers/ValidatorProvider/implementations/JoiValidatorProvider'

import ICreateCustomerDTO from '../dtos/ICreateCustomerDTO'
import IGetCustomerDTO from '../dtos/IGetCustormerDTO'
import { JoiCustomerSchemaProvider }
  from '../providers/CustomerSchemaProvider/implementations/JoiCustomerSchemaProvider'
import ICustomerRepository from '../repositories/ICustomerRepository'
import BadRequestError from '../../../shared/errors/BadRequestError'

@injectable()
export default class CreateCustomerService {
  constructor (
    @inject('CustomerRepository')
    private customerRepository: ICustomerRepository,
    @inject('JoiCustomerSchemaProvider')
    private joiCustomerSchemaProvider: JoiCustomerSchemaProvider,
    @inject('JoiValidatorProvider')
    private joiValidatorProvider: JoiValidatorProvider
  ) {}

  public async execute (customerData: ICreateCustomerDTO): Promise<IGetCustomerDTO> {
    const result = this.joiValidatorProvider.validate(customerData, this.joiCustomerSchemaProvider)

    if (!result.valid) throw new BadRequestError(result.messages.join('\n'))

    const createdCustomer = await this.customerRepository.create(customerData)
    return createdCustomer
  }
}
