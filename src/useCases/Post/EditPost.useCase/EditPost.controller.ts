import { IEditPostRequestDTO } from './EditPost.DTO';
import { EditPostUseCase } from './EditPost.useCase';
import { Request, Response } from 'express';

export class EditPostController {

    constructor(
        private editPostUseCase: EditPostUseCase,
    ){}

    async handle(request: Request, response: Response): Promise<Response> {
       try {
        const data = await this.editPostUseCase.execute(request.body as IEditPostRequestDTO)
        return response.status(200).json({data: data});
       } catch (error) {
        return response.status(500).json({message: error.message || 'Internal Server Error'});   
       }
    }
}