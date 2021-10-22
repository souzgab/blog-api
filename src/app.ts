// import { setupRoutes } from './src/controller/routes/index';
// import { setupMiddlewares } from './src/utils/middlewares/index';
import express from 'express'
import { setupRoutes } from './controller/routes.config'

const app = express()

setupRoutes(app)
// setupMiddlewares(app)


export {app}