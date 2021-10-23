import { IPostRepository } from "../../../repositories/Post.repository";


export class DeletePostUseCase {

    constructor(
        private postRepository: IPostRepository,
    ) {}

    async execute(id: string): Promise<boolean> {
        const post = await this.postRepository.findById(id)
        if(post) {
            return await this.postRepository.delete(post.id)
        } else {
            throw new Error('Could not delete post')
        }
    }
}