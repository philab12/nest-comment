import { CommentEntity } from "src/comment/entities/comment.entity";
import { GenericEntity } from "src/generic/generic.entity";
import { LikeEntity } from "src/like/entities/like.entity";
import { User } from "src/user/entities/user.entity";
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn, OneToMany } from "typeorm";

@Entity({name: "posts"})
export class PostEntity extends GenericEntity {
@PrimaryGeneratedColumn()
id:number;

@Column({length: 50})
title:string;

@Column({type: "text"})
body:string;

@ManyToOne(() => User, (user: User) => user.posts, {onUpdate: "CASCADE", onDelete: "CASCADE"} )
@JoinColumn({name: "user_id"})
user:User


@OneToMany(() => CommentEntity, (comment:CommentEntity) => comment.post)
comments: CommentEntity[]


@OneToMany(() => LikeEntity, (like:LikeEntity) =>  like.post)
likes: LikeEntity[]

}