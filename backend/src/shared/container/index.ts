import { container } from 'tsyringe'
import { ProviderToken } from '../../@types'

import ILoggerProvider from './providers/LoggerProvider/ILoggerProvider'
import WinstonLoggerProvider from './providers/LoggerProvider/implementations/WinstonLoggerProvider'

const LoggerProviderToken: ProviderToken = 'LoggerProvider'
container.registerSingleton<ILoggerProvider>(
  LoggerProviderToken,
  WinstonLoggerProvider
)
