// import { Request, Response } from 'express'
// import { container } from 'tsyringe'

// export default class CustomerController {
//   public async create (req: Request, res: Response): Promise<Response> {
//     const { name, email, password } = req.body

//     const createCustomer = container.resolve('CreateCustomerService')

//     const user = await createCustomer.execute({
//       name,
//       email,
//       password
//     })

//     delete user.password

//     return res.json(user)
//   }
// }
