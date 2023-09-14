import { GenericEntity } from "src/generic/generic.entity";
import { User } from "src/user/entities/user.entity";
import {Entity, Column, PrimaryColumn, ManyToOne, JoinColumn, PrimaryGeneratedColumn} from "typeorm";

enum Status{
    blocked = "blocked",
    accepted = "accepted",
    pending = "pending"
}

@Entity({name: "user_followers"})
export class UserFollowerEntity extends GenericEntity {
    @PrimaryGeneratedColumn()
    id:number;

    @ManyToOne(() => User, (user:User) => user.followers, {onUpdate: "CASCADE" , onDelete: "CASCADE"})
    @JoinColumn({name: "followers_id"})
    follower:User

    
    @ManyToOne(() => User, (user:User) => user.followings, {onUpdate: "CASCADE" , onDelete: "CASCADE"})
    @JoinColumn({name: "following_id"})
    following:User
 
    
    @Column({type:"enum", enum: Status, default: Status.pending})
    status:Status
}