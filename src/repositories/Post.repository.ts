import { Author } from '../entities/Author';
import { Post } from './../entities/Post';

export interface IPostRepository {
    find(): Promise<Post[]>
    findById(id: string): Promise<Post>
    save(post: Post): Promise<Post>;
    findByAuthor(autor: Author): Promise<Post>;
    delete(id: string): Promise<boolean>;
}