import { Author } from './../../entities/Author';
import { BeforeInsert, Column, CreateDateColumn, Entity, ObjectIdColumn, UpdateDateColumn } from "typeorm";
import { ObjectID } from 'typeorm';
import { v4 } from 'uuid';
import { Category } from "../../entities/Category";

export interface IPost {
    title: string;
    description: string;
    author: Author;
    category: Category[];
}


@Entity('post')
export class PostEntity implements IPost  {
        
    @ObjectIdColumn()
    _id: ObjectID;

    @Column({ type: 'uuid', generated: 'uuid', unique: true })
    id: string;

    @Column({ type: 'varchar', nullable: false })
    title: string
    
    @Column({ type: 'varchar', nullable: false })
    description: string

    @Column({ type: 'array', nullable: false })
    category: Category[];

    @Column({ type: 'json', nullable: false })
    author: Author;

    @CreateDateColumn({ type: 'timestamp', nullable: false })
    createdAt: Date;

    @UpdateDateColumn({ type: 'timestamp', nullable: false })
    updatedAt: Date;

    @BeforeInsert()
    generate = () => {
        this.id = v4()
    }
}

export default new PostEntity();