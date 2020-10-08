import { ValidationError } from '@hapi/joi'

import IValidatorProvider, { ValidateFunction, ValidateReturn } from '../IValidatorProvider'

export default class JoiValidatorProvider implements IValidatorProvider {
  validate<T extends any, U extends ValidateFunction<ValidationError, any>> (
    object: T,
    schema: U
  ): ValidateReturn {
    const validateReturn: ValidateReturn = {
      messages: [],
      valid: true
    }

    const result = schema.validate(object)

    if (result.error) {
      validateReturn.messages.push(result.error.message)
      validateReturn.valid = false
    }

    return validateReturn
  }
}
