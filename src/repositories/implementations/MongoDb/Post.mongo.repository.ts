import { PostEntity } from './../../models/post.model';
import { Author } from './../../../entities/Author';
import { Post } from './../../../entities/Post';
import { IPostRepository } from './../../Post.repository';
import { DeleteResult, getConnection } from 'typeorm';

export class PostMongoRepository implements IPostRepository {

    constructor() { }

    async findByAuthor(author: Author): Promise<Post> {
        return await getConnection().getRepository(PostEntity).findOne({
            where: { author: author }
        })
    }

    async save(post: Post): Promise<Post> {

        const findOne = await this.findById(post.id)

        if (!findOne) {
            return await getConnection()
                .getRepository(PostEntity)
                .save(
                    getConnection()
                    .getRepository(PostEntity)
                    .create(post)
                )
        } else {
            return await getConnection()
                .getRepository(PostEntity)
                .update({
                    id: post.id,
                }, {
                    ...post
                }).then(async() => {
                    return await this.findById(post.id)
                })
        }

    }

    async find(): Promise<Post[]> {
        return await getConnection()
            .getRepository(PostEntity)
            .find()
    }

    async findById(id: string): Promise<Post> {
        return await getConnection()
            .getRepository(PostEntity)
            .findOne({
                where: {
                    id: id
                }
            })
    }

    async delete(id: string): Promise<boolean> {
        return await getConnection()
        .getRepository(PostEntity)
        .delete({
            id: id
        }).then(() => true)
    }
}