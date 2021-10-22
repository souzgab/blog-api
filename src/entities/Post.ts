import { v4 } from 'uuid';
import { Category } from './Category';
import { Author } from './Author';
export class Post {

    public readonly id: string;

    public title: string;
    public description: string;
    public author: Author;
    public category: Category[];

    constructor(props: Omit<Post, 'id'>, id?: string) {
        Object.assign(this, props);

        if (!id) {
            this.id = v4()
        } 
    }

    

}