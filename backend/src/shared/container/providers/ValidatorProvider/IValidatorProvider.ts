import { Primitive } from '../../../../@types'

export type ValidateReturn = {
    messages: string[], valid: boolean
  }

export type ValidateFunction<T extends Error, U extends unknown> = {
  validate: (value: U) => { error?: T }
}

export type GenericObject = Record<string, Primitive>

export default interface IValidatorProvider {
  validate(
    object: Record<string, unknown | any>,
    schema: any
  ): ValidateReturn
}
