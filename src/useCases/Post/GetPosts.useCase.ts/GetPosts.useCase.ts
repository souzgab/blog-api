import { IPostRepository } from '../../../repositories/Post.repository';
import { Post } from './../../../entities/Post';

export class GetPostUseCase {

    constructor(
        private postRepository: IPostRepository,
    ) {}

    async execute(): Promise<Post[]> {
        return await this.postRepository.find()
    }
}