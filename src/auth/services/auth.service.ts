import { Injectable, UnauthorizedException } from "@nestjs/common";
import { UserRepository } from "../repository/user.repository";
import * as bcrypt from 'bcryptjs';
import { JwtService } from "@nestjs/jwt";

@Injectable()
export class AuthService {
    constructor(
        private readonly userRepository: UserRepository,
        private readonly jwtService: JwtService,
    ){};

    async register(username: string, email: string, password: string){
        const hashPassword = await bcrypt.hash(password, 10);
        return this.userRepository.createUser({
            username,
            email,
            password: hashPassword
        });
    }


    async login(username: string, password: string) {
        const user = await this.userRepository.findByUserName(username);

        if(!user || !(await bcrypt.compare(password, user.password))){
            throw new UnauthorizedException('Invalid credentials');
        }

        const payload = { username: user.username, sub: user.id};
        return {
            accessToken: this.jwtService.sign(payload)
        }


    }

}