import { DeletePostUseCase } from './DeletePost.useCase';
import { Request, Response } from 'express';

export class DeletePostController {

    constructor(
        private deletePostUseCase: DeletePostUseCase,
    ){}

    async handle(request: Request, response: Response): Promise<Response> {
       try {
        const data = await this.deletePostUseCase.execute(request.body.id)
        return response.status(200).json({ executed: data });
       } catch (error) {
        return response.status(500).json({message: error.message || 'Internal Server Error'});   
       }
    }
}