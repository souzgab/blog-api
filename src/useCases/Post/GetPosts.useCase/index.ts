import { GetPostUseCase } from './GetPosts.useCase';
import { GetPostController } from './GetPost.controller';
import { PostMongoRepository } from '../../../repositories/implementations/MongoDb/Post.mongo.repository';


const postRepository = new PostMongoRepository();

const getPostUseCase = new GetPostUseCase(
    postRepository,
);

const getPostController = new GetPostController(
    getPostUseCase
)

export {
    getPostUseCase, getPostController
}