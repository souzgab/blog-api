import { PostEntity } from './../../models/post.model';
import { Author } from './../../../entities/Author';
import { Post } from './../../../entities/Post';
import { IPostRepository } from './../../Post.repository';
import { getConnection } from 'typeorm';

export class PostMongoRepository implements IPostRepository {

    constructor(){}

    async findByAuthor(author: Author): Promise<Post> {
        return await getConnection().getRepository(PostEntity).findOne({
            where: { author: author }
        })
    }

    async save(post: Post): Promise<void> {
        await getConnection()
        .getRepository(PostEntity)
        .save(
            getConnection()
            .getRepository(PostEntity)
            .create(post)
        )
    }

    async find(): Promise<Post[]> {
        return await getConnection()
        .getRepository(PostEntity)
        .find()
    }
}