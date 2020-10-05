import ICreateCustomerDTO from '../dtos/ICreateCustomerDTO'
import IGetCustomerDTO from '../dtos/IGetCustormerDTO'
import IUpdateCustomerDTO from '../dtos/IUpdatedCustomerDTO'

export default interface ICustomerRepository {
  create(customerData: ICreateCustomerDTO): Promise<IGetCustomerDTO>
  findById(id: string): Promise<IGetCustomerDTO | undefined>
  find(name?: string, limit?: number, skip?: number): Promise<IGetCustomerDTO[]>
  remove(id: string): Promise<{ removed: boolean }>
  update(id: string, customerData: IUpdateCustomerDTO): Promise<IGetCustomerDTO>
}
