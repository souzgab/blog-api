import express from 'express'
import './config/conn'
import { setupMiddlewares } from './middlewares'
import { setupRoutes } from './routes/routes.config'

const app = express()

setupMiddlewares(app)
setupRoutes(app)

export {app}