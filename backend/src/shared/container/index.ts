import { container } from 'tsyringe'

import { ProviderToken } from '../../@types'
import CustomerRepository from '../../modules/customer/infra/neo4j/CustomerRepository'
import ICustomerRepository from '../../modules/customer/repositories/ICustomerRepository'

import '../../modules/customer/providers'
import './providers'

const CustomerRepositoryToken: ProviderToken = 'CustomerRepository'

container.registerSingleton<ICustomerRepository>(
  CustomerRepositoryToken,
  CustomerRepository
)
