import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('user')
export class User{
    @PrimaryGeneratedColumn()
    id: number;


    @Column({unique: true})
    username: string;


    @Column({unique: true})
    email: string;


    @Column()
    password: string;

}