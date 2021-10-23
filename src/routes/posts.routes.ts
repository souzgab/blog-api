import {Router} from 'express'
import { createPostController } from '../useCases/Post/CreatePost.useCase'
import { deletePostController } from '../useCases/Post/DeletePost.useCase'
import { editPostController } from '../useCases/Post/EditPost.useCase'
import { getPostController } from '../useCases/Post/GetPosts.useCase'

const postsRouter = Router()

postsRouter.post('/post', (request, response) => {
    return createPostController.handle(request, response)
})
postsRouter.get('/post', (request, response) => {
    return getPostController.handle(request, response)
})
postsRouter.put('/post', (request, response) => {
    return editPostController.handle(request, response)
})
postsRouter.delete('/post', (request, response) => {
    return deletePostController.handle(request, response)
})


export {postsRouter}