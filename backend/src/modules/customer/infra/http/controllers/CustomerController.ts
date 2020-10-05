import { Request, Response } from 'express'
import { container } from 'tsyringe'

import CreateCustomerService from '../../../services/CreateCustomerService'
import RemoveCustomerService from '../../../services/RemoveCustomerService'
import UpdateCustomerService from '../../../services/UpdateCustomerService'
import FindCustomerByIdService from '../../../services/FindCustomerByIdService'
import FindCustomerService from '../../../services/FindCustomerService'
import BadRequestError from '../../../../../shared/errors/BadRequestError'

export default class CustomerController {
  async create (req: Request, res: Response): Promise<Response> {
    const {
      CPF,
      birthdate,
      email,
      name,
      phone
    } = req.body

    const createCustomer = container.resolve(CreateCustomerService)

    const customer = await createCustomer.execute({
      CPF,
      birthdate,
      email,
      name,
      phone
    })

    return res.json(customer)
  }

  async update (req: Request, res: Response): Promise<Response> {
    const { id } = req.params
    const {
      birthdate,
      email,
      name,
      phone
    } = req.body

    const updateCustomer = container.resolve(UpdateCustomerService)

    const customer = await updateCustomer.execute(id, {
      birthdate,
      email,
      name,
      phone
    })

    return res.json(customer)
  }

  async remove (req: Request, res: Response): Promise<Response> {
    const { id } = req.params

    if (!id) throw new BadRequestError('Atenção, ID não foi recebido!')

    const removeCustomer = container.resolve(RemoveCustomerService)

    const customer = await removeCustomer.execute(id)

    return res.json(customer)
  }

  async findById (req: Request, res: Response): Promise<Response> {
    const { id } = req.params

    const findCustomerById = container.resolve(FindCustomerByIdService)

    const customer = await findCustomerById.execute(id)

    return res.json(customer)
  }

  async find (
    req: Request<never, never, never, { name: string; limit?: string; skip?: string }>,
    res: Response
  ): Promise<Response> {
    const { name, limit, skip } = req.query

    const findCustomer = container.resolve(FindCustomerService)

    const customer = await findCustomer.execute(name, limit, skip)

    return res.json(customer)
  }
}
