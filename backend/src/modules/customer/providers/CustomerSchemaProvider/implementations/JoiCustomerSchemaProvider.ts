import Joi, { ValidationError } from '@hapi/joi'

import ICreateCustomerDTO from '../../../dtos/ICreateCustomerDTO'
import { ICustomerSchemaProvider } from '../ICustomerSchemaProvider'

export class JoiCustomerSchemaProvider implements ICustomerSchemaProvider<
  ValidationError
  > {
  private schema = Joi.object<ICreateCustomerDTO>().keys({
    CPF: Joi.string().pattern(/[0-9]/).length(11)
      .error(_err => Error('CPF must follow pattern 00000000000')),
    birthdate: Joi.date().max(new Date()),
    email: Joi.string().email(),
    name: Joi.string().min(2),
    phone: Joi.string().min(9).max(19)
  }).required()

  validate (customerDTO: ICreateCustomerDTO): { error?: ValidationError } {
    const errorFinded = this.schema.validate(customerDTO)

    return {
      error: errorFinded.error
    }
  }
}
