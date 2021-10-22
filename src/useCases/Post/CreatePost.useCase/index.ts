import { PostMongoRepository } from '../../../repositories/implementations/MongoDb/Post.mongo.repository';
import { CreatePostController } from './CreatePost.controller';
import { CreatePostUseCase } from './CreatePost.useCase';


const postRepository = new PostMongoRepository();

const createPostUseCase = new CreatePostUseCase(
    postRepository
);

const createPostController = new CreatePostController(
    createPostUseCase
);

export { createPostUseCase, createPostController };