import { Post } from '../../../entities/Post';
import { IPostRepository } from '../../../repositories/Post.repository';
import { ICreatePostRequestDTO } from './CreatePost.DTO';

export class CreatePostUseCase {


    constructor(
        private postRepository: IPostRepository
    ) {
        
    }

    async execute(data: ICreatePostRequestDTO) {
        if(this.invalidObject(data)) {
            throw new Error('InvalidBody')
        }  
        const post = new Post(data)
        return await this.postRepository.save(post)
    }


    private invalidObject(data: ICreatePostRequestDTO): boolean {
        const obj = []
        for(const key in data) {
            if (!data[key] || data[key].length === 0) {
                obj.push(true)
            }
        }
        return obj.length > 0
    }

}