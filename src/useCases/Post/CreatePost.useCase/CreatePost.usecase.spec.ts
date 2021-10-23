import { CreatePostUseCase } from './CreatePost.useCase';
import { IPostRepository } from './../../../repositories/Post.repository';
import { Post } from './../../../entities/Post';

jest.mock('./../../../entities/Post')

const PostMock = Post as jest.Mock<Post>

describe('CreatePostUseCase', () => {

    let postRepository: IPostRepository

    beforeEach(() => {
        postRepository = {
            find: jest.fn(),
            findByAuthor: jest.fn(),
            save: jest.fn(),
        }
    })

    
    it('should be an instance of Post', async () => {
        const postUseCase = new PostMock()
        expect(postUseCase).toBeDefined()
    })

    it('should return errors if no body', async () => {
        const useCase = new CreatePostUseCase(postRepository)

        return await useCase.execute({
            id: '',
            title: '',
            description: '',
            author: undefined,
            category: []
        }).catch(e => expect(e.message).toMatch('InvalidBody'))
    })
})