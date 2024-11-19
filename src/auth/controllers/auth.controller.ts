import { Controller, Post, Body } from "@nestjs/common";
import { AuthService } from "../services/auth.service";
import { RegisterDto } from "../dto/register.dto";
import { LoginDto } from "../dto/login.dto";

@Controller('auth')
export class AuthController{
    constructor(private readonly authService: AuthService){}

    @Post('register')
    async register(@Body() registerDto: RegisterDto) {
        console.log("login 🔥🔥🔥🔥")
        return this.authService.register(
            registerDto.username,
            registerDto.email,
            registerDto.password
        )
    }

    @Post('login')
    async login(@Body() loginDto: LoginDto){
        return this.authService.login(loginDto.username, loginDto.password);
    }
}