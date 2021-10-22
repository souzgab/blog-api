import { CreatePostUseCase } from './CreatePost.useCase'
import {Request, Response} from 'express';
import { ICreatePostRequestDTO } from './CreatePost.DTO';

export class CreatePostController {

    constructor(
        private createPostUseCase: CreatePostUseCase,
    ) {

    }

    async handle(request: Request, response: Response): Promise<Response> {
        const post = request.body as ICreatePostRequestDTO

        try {
            await this.createPostUseCase.execute(post)

            return response.status(201).send()
        } catch (error) {
            return response.status(400).json({ message: error.message || 'Internal Server Error' })
        }
    }
}