import { v4 } from 'uuid';

export class Category {


    public readonly id: string;

    public name: string;

    constructor(props: Omit<Category, 'id'>, id?: string) {
        Object.assign(this, props);

        if (!id) {
            this.id = v4()
        } 
    }
}