import { Request, Response } from 'express'
import { container } from 'tsyringe'
import CreateCustomerService from '../../../services/CreateCustomerService'

export default class CustomerController {
  public async create (req: Request, res: Response): Promise<Response> {
    const {
      CPF,
      active,
      birthdate,
      email,
      name,
      phone
    } = req.body

    const createCustomer = container.resolve(CreateCustomerService)

    const user = await createCustomer.execute({
      CPF,
      active,
      birthdate,
      email,
      name,
      phone
    })

    return res.json(user)
  }
}
