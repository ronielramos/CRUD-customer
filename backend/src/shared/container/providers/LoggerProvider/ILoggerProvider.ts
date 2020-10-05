import { DefaultObject, Primitive } from '../../../../@types'

export default interface ILoggerProvider {
  debug(message: DefaultObject | Primitive, ...otherMessages: (DefaultObject | Primitive)[]): void
  error(message: DefaultObject | Primitive, ...otherMessages: (DefaultObject | Primitive)[]): void
  log(message: DefaultObject | Primitive, ...otherMessages: (DefaultObject | Primitive)[]): void
  warn(message: DefaultObject | Primitive, ...otherMessages: (DefaultObject | Primitive)[]): void
}
