import { Request, Response } from 'express';
import { GetPostUseCase } from './GetPosts.useCase';

export class GetPostController {

    constructor(
        private getPostUseCase: GetPostUseCase,
    ){}

    async handle(request: Request, response: Response): Promise<Response> {
       try {
        const data = await this.getPostUseCase.execute()
        return response.status(200).json({data: data});
       } catch (error) {
        return response.status(500).json({message: error.message || 'Internal Server Error'});   
       }
    }
}