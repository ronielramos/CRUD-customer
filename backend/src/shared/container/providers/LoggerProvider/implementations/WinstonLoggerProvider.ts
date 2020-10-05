import * as winston from 'winston'

import { DefaultObject, Primitive } from '../../../../../@types'
import ILoggerProvider from '../ILoggerProvider'

export default class WinstonLoggerProvider implements ILoggerProvider {
  private logger: winston.Logger
  private format: winston.Logform.Format

  constructor () {
    this.format = this.getDefaultFormat()
    this.logger = this.createLogger()
  }

  private getDefaultFormat () {
    return winston.format.printf(({ level, message }) => {
      return `[${level}]: - ${message}`
    })
  }

  private createLogger () {
    return winston.createLogger({
      format: winston.format.combine(
        winston.format.colorize(),
        this.format
      ),
      transports: [
        new winston.transports.Console({ level: 'debug' })
      ]
    })
  }

  debug (message: DefaultObject | Primitive, ...otherMessages: (DefaultObject | Primitive)[]) {
    const messages = [message, ...otherMessages]
    this.logger.debug(messages)
  }

  error (message: DefaultObject | Primitive, ...otherMessages: (DefaultObject | Primitive)[]) {
    const messages = [message, ...otherMessages]
    this.logger.error(messages)
  }

  log (message: DefaultObject | Primitive, ...otherMessages: (DefaultObject | Primitive)[]) {
    const messages = [message, ...otherMessages]
    this.logger.info(messages)
  }

  warn (message: DefaultObject | Primitive, ...otherMessages: (DefaultObject | Primitive)[]) {
    const messages = [message, ...otherMessages]
    this.logger.warn(messages)
  }
}
