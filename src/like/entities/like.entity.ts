import { GenericEntity } from "src/generic/generic.entity";
import { PostEntity } from "src/post/entities/post.entity";
import { User } from "src/user/entities/user.entity";
import {Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn} from "typeorm";

export enum Type{
    happy = "happy",
    sad = "sad",
    angry = "angry",
    like = "like",
    love = "love"

}

@Entity({name: "likes"})
export class LikeEntity extends GenericEntity {

    @PrimaryGeneratedColumn()
    id:number;

    @Column({enum: Type, type: "enum", default: Type.like})
    type: string;

    @ManyToOne(() => User, (user:User) => user.likes, {onUpdate: "CASCADE", onDelete:"CASCADE"})
    @JoinColumn({name: "user_id"})
    user:User


    @ManyToOne(() => PostEntity, (post:PostEntity) => post.likes, {onUpdate: "CASCADE", onDelete: "CASCADE"})
    @JoinColumn({name: "post_id"})
    post:PostEntity




}