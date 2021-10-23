import { Post } from "../../../entities/Post"
import { IPostRepository } from "../../../repositories/Post.repository"


jest.mock('./../../../entities/Post')

const getPostMock = Post as jest.Mock<Post>

describe('GetPostUseCase', () => {


    let postRepository: IPostRepository

    beforeEach(() => {
        postRepository = {
            find: jest.fn(),
            findByAuthor: jest.fn(),
            save: jest.fn(),
        }
    })

    
    it('should be an instance of Post', async () => {
        const getUseCase = new getPostMock()
        expect(getUseCase).toBeDefined()
    })

})