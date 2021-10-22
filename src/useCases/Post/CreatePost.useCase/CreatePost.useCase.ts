import { Post } from '../../../entities/Post';
import { IPostRepository } from '../../../repositories/Post.repository';
import { ICreatePostRequestDTO } from './CreatePost.DTO';

export class CreatePostUseCase {


    constructor(
        private postRepository: IPostRepository
    ) {
        
    }

    async execute(data: ICreatePostRequestDTO) {
        const post = new Post(data)
        return await this.postRepository.save(post)
    }

}