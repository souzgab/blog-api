import { Express } from 'express'
import { postsRouter } from './posts.routes'

export const setupRoutes = (app: Express): void => {
    app.use([
        postsRouter
    ])
}