import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { User } from "../domain/user.entity";



@Injectable() 
export class UserRepository{
    constructor(
        @InjectRepository(User)
        private readonly userRepo: Repository<User>
    ){};

    async findByUserName(username: string): Promise<User | undefined>{
        return this.userRepo.findOne({where: { username }})
    }

    async  findByEmail(email: string): Promise<User | undefined>{
        return this.userRepo.findOne({where: {email}})
    }

    async createUser(user: Partial<User>): Promise<User>{
        const newUser = this.userRepo.create(user);
        return this.userRepo.save(newUser);
    } 

}