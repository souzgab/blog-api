import { Author } from './../../../entities/Author';
import { Post } from './../../../entities/Post';
import { IPostRepository } from './../../Post.repository';

export class PostMongoRepository implements IPostRepository {

    private posts: Post[] = [];

    constructor() {}

    async findByAuthor(author: Author): Promise<Post> {
        return this.posts.find(post => post.author === author)
    }

    async save(post: Post): Promise<void> {
        this.posts.push(post);
    }
}