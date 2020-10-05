import { container } from 'tsyringe'
import { ProviderToken } from '../../@types'

import ILoggerProvider from './providers/LoggerProvider/ILoggerProvider'
import WinstonLoggerProvider from './providers/LoggerProvider/implementations/WinstonLoggerProvider'
import CustomerRepository from '../../modules/customer/infra/neo4j/CustomerRepository'
import ICustomerRepository from '../../modules/customer/repositories/ICustomerRepository'

const LoggerProviderToken: ProviderToken = 'LoggerProvider'
const CustomerProviderToken: ProviderToken = 'CustomerRepository'

container.registerSingleton<ILoggerProvider>(
  LoggerProviderToken,
  WinstonLoggerProvider
)

container.registerSingleton<ICustomerRepository>(
  CustomerProviderToken,
  CustomerRepository
)
