import { container } from 'tsyringe'
import { ICustomerSchemaProvider } from './CustomerSchemaProvider/ICustomerSchemaProvider'
import { JoiCustomerSchemaProvider }
  from './CustomerSchemaProvider/implementations/JoiCustomerSchemaProvider'

container.registerSingleton<ICustomerSchemaProvider<Error>>(
  'JoiCustomerSchemaProvider',
  JoiCustomerSchemaProvider
)
