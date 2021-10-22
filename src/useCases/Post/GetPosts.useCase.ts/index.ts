import { GetPostController } from './GetPost.controller';
import { PostMongoRepository } from '../../../repositories/implementations/MongoDb/Post.mongo.repository';
import { GetPostUseCase } from './GetPosts.useCase';


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