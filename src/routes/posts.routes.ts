import {Router} from 'express'
import { createPostController } from '../useCases/Post/CreatePost.useCase'
import { getPostController } from '../useCases/Post/GetPosts.useCase.ts'

const postsRouter = Router()

postsRouter.post('/post', createPostController.handle)
postsRouter.get('/post', getPostController.handle)

export {postsRouter}