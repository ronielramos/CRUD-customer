import { debug, error, info, warn } from 'console'

import { DefaultObject, Primitive } from '../../../../../@types'
import ILoggerProvider from '../ILoggerProvider'

export default class ConsoleLoggerProvider implements ILoggerProvider {
  debug (message: DefaultObject | Primitive, ...otherMessages: (DefaultObject | Primitive)[]) {
    debug(message, otherMessages)
  }

  error (message: DefaultObject | Primitive, ...otherMessages: (DefaultObject | Primitive)[]) {
    error(message, otherMessages)
  }

  log (message: DefaultObject | Primitive, ...otherMessages: (DefaultObject | Primitive)[]) {
    info(message, otherMessages)
  }

  warn (message: DefaultObject | Primitive, ...otherMessages: (DefaultObject | Primitive)[]) {
    warn(message, otherMessages)
  }
}
