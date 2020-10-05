import { Router } from 'express'

import CustomerController from '../controllers/CustomerController'

const customerRouter = Router()
const customerController = new CustomerController()

customerRouter.post('/', customerController.create)
customerRouter.patch('/:id', customerController.update)

customerRouter.get('/', customerController.find)
customerRouter.get('/:id', customerController.findById)

customerRouter.delete('/:id', customerController.remove)

export default customerRouter
