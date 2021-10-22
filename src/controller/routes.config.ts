import { Express } from 'express'
import { postsRouter } from './routes/posts.routes'

export const setupRoutes = (app: Express): void => {
    app.use([
        postsRouter
    ])
}