import ICreateCustomerDTO from '../dtos/ICreateCustomerDTO'
import IGetCustomerDTO from '../dtos/IGetCustormerDTO'
import IUpdateCustomerDTO from '../dtos/IUpdatedCustomerDTO'

export default interface ICustomerRepository {
  create(customerData: ICreateCustomerDTO): Promise<IGetCustomerDTO>
  findById(id: string): Promise<IGetCustomerDTO | undefined>
  findByName(name: string): Promise<IGetCustomerDTO[]>
  remove(id: string): Promise<boolean>
  update(id: string, customerData: IUpdateCustomerDTO): Promise<IGetCustomerDTO>
}
