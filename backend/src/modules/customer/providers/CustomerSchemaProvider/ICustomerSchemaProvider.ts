import { ValidateFunction }
  from '../../../../shared/container/providers/ValidatorProvider/IValidatorProvider'

export type ICustomerSchemaProvider <T extends Error> = ValidateFunction<T, any>
