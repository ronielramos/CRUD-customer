import { container } from 'tsyringe'

import { ProviderToken } from '../../../@types'
import ILoggerProvider from './LoggerProvider/ILoggerProvider'
import WinstonLoggerProvider from './LoggerProvider/implementations/WinstonLoggerProvider'
import JoiValidatorProvider from './ValidatorProvider/implementations/JoiValidatorProvider'
import IValidatorProvider from './ValidatorProvider/IValidatorProvider'

const LoggerProviderToken: ProviderToken = 'LoggerProvider'
const JoiValidatorProviderToken: ProviderToken = 'JoiValidatorProvider'

container.registerSingleton<ILoggerProvider>(
  LoggerProviderToken,
  WinstonLoggerProvider
)

container.registerSingleton<IValidatorProvider>(
  JoiValidatorProviderToken,
  JoiValidatorProvider
)
