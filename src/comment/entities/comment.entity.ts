import { GenericEntity } from "src/generic/generic.entity";
import { PostEntity } from "src/post/entities/post.entity";
import { User } from "src/user/entities/user.entity";
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from "typeorm";

@Entity({name: "comments"})
export class CommentEntity extends GenericEntity {
@PrimaryGeneratedColumn()
id:number;


@Column({type: "text"})
body:string;

@ManyToOne(() => User, (user: User) => user.comments, {onUpdate: "CASCADE", onDelete: "CASCADE"} )
@JoinColumn({name: "user_id"})
user:User


@ManyToOne(() => PostEntity, (post:PostEntity) => post.comments, {onUpdate: "CASCADE", onDelete: "CASCADE"})
@JoinColumn({name: "post_id"})
post:PostEntity


}