import 'express-async-errors'
import 'reflect-metadata'

import '../../container'

import cors from 'cors'
import express, { NextFunction, Request, Response } from 'express'
import { container } from 'tsyringe'

import ILoggerProvider from '../../container/providers/LoggerProvider/ILoggerProvider'
import BadRequestError from '../../errors/BadRequestError'
import neo4jDriver from '../neo4j'
import routes from './routes'

const app = express()

app.use(cors())
app.use(express.json())

const logger = container.resolve<ILoggerProvider>('LoggerProvider')

app.use('/api', routes)

// eslint-disable-next-line @typescript-eslint/no-unused-vars
app.use((err: Error, _req: Request, res: Response, _next: NextFunction) => {
  if (err instanceof BadRequestError) {
    return res
      .status(err.statusCode)
      .json({ message: err.message, status: 'error' })
  }

  logger.error(err)

  return res
    .status(500)
    .json({ message: 'Internal server error', status: 'error' })
})

app.listen(process.env.PORT, async () => {
  await neo4jDriver.verifyConnectivity()

  logger.log('✅ - neo4j on')
  logger.log('✅ - listening on ' + process.env.PORT)
})
