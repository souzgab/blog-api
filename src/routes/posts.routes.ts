import {Router} from 'express'
import { createPostController } from '../useCases/Post/CreatePost.useCase'
import { getPostController } from '../useCases/Post/GetPosts.useCase.ts'

const postsRouter = Router()

postsRouter.post('/post', (request, response) => createPostController.handle(request, response))
postsRouter.get('/post', (request, response) => getPostController.handle(request, response))

export {postsRouter}