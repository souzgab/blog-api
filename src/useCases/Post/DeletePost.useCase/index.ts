import { DeletePostUseCase } from './DeletePost.useCase';
import { DeletePostController } from './DeletePost.controller';
import { PostMongoRepository } from '../../../repositories/implementations/MongoDb/Post.mongo.repository';


const postRepository = new PostMongoRepository();

const deletePostUseCase = new DeletePostUseCase(
    postRepository,
);

const deletePostController = new DeletePostController(
    deletePostUseCase
)

export {
    deletePostUseCase, deletePostController
}