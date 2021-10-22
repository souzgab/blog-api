import {Router} from 'express'
import { createPostController } from '../../useCases/Post/CreatePost.useCase.ts'

const postsRouter = Router()

postsRouter.post('/post', createPostController.handle)

export {postsRouter}