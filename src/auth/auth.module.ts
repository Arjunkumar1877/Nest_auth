import { Module } from "@nestjs/common";
import { AuthController } from "./controllers/auth.controller";
import { AuthService } from "./services/auth.service";
import { UserRepository } from "./repository/user.repository";
import { TypeOrmModule } from "@nestjs/typeorm";
import { User } from "./domain/user.entity";
import { JwtModule } from "@nestjs/jwt";



@Module({
    imports: [
        TypeOrmModule.forFeature([User]),
        JwtModule.register({
            secret: 'hello_secret',
            signOptions: { expiresIn: '1h'},
        }),
    ],
    controllers: [AuthController],
    providers: [AuthService, UserRepository],
})

export class AuthModule {}