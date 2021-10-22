import { Post } from '../../../entities/Post';
import { IPostRepository } from '../../../repositories/Post.repository';
import { ICreatePostRequestDTO } from './CreatePost.DTO';

export class CreatePostUseCase {


    constructor(
        private postRepository: IPostRepository
    ) {
        
    }

    async execute(data: ICreatePostRequestDTO) {
        await this.postRepository.save(new Post(data))
    }

}