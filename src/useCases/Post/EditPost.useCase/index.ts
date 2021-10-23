import { PostMongoRepository } from '../../../repositories/implementations/MongoDb/Post.mongo.repository';
import { EditPostController } from './EditPost.controller';
import { EditPostUseCase } from './EditPost.useCase';


const postRepository = new PostMongoRepository();

const editPostUseCase = new EditPostUseCase(
    postRepository,
);

const editPostController = new EditPostController(
    editPostUseCase
)

export {
    editPostUseCase, editPostController
}