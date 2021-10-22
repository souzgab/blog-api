import { Author } from '../entities/Author';
import { Post } from './../entities/Post';

export interface IPostRepository {
    findByAuthor(autor: Author): Promise<Post>;
    save(post: Post): Promise<void>;
}