import { IEditPostRequestDTO } from './EditPost.DTO';
import { IPostRepository } from '../../../repositories/Post.repository';
import { Post } from '../../../entities/Post';

export class EditPostUseCase {

    constructor(
        private postRepository: IPostRepository,
    ) {}

    async execute(data: IEditPostRequestDTO): Promise<Post> {
        const post = await this.postRepository.findById(data.id)
        if (post) {
            return await this.postRepository.save(data)
        } else {
            throw new Error(`Could not find post`)
        }
    }
}