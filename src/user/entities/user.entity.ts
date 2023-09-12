import { CommentEntity } from "src/comment/entities/comment.entity";
import { GenericEntity } from "src/generic/generic.entity";
import { LikeEntity } from "src/like/entities/like.entity";
import { PostEntity } from "src/post/entities/post.entity";
import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from "typeorm";

enum Roles {
   user = "user",
   admin = "admin",
};

@Entity("users")
export class User extends GenericEntity {

    @PrimaryGeneratedColumn()
    id:number;

    @Column({length: 50, unique: true})
    name:string;

    @Column({type: "text", nullable: true})
    about:string;

    @Column({length: 100, unique:true})
    email:string;

    @Column({type: "enum", enum: Roles, default: Roles.user})
    role:Roles

    @OneToMany(() => PostEntity, (post:PostEntity) => post.user)
    posts: PostEntity[]
    

    @OneToMany(() => CommentEntity, (comment:CommentEntity) => comment.user)
    comments: CommentEntity[]

    @OneToMany(() => LikeEntity, (like:LikeEntity) => like.user)
    likes: LikeEntity[]
}