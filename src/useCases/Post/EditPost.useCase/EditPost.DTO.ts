import { Author } from "../../../entities/Author";
import { Category } from "../../../entities/Category";


export interface IEditPostRequestDTO {
    id: string;
    title: string;
    description: string;
    author: Author;
    category: Category[];
}