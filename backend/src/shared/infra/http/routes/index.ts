import { Router } from 'express'

import customerRouter from '../../../../modules/customer/infra/http/routes/CustomerRoutes'

const routes = Router()

routes.use('/customer', customerRouter)

export default routes
