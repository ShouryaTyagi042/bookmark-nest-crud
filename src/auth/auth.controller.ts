import { Controller, Post } from "@nestjs/common";
import { AuthService } from "./auth.service";

@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService) {
    }

    @Post('signup')
    login() {
        return this.authService.login();
    }

    @Post('logout')
    logout() {
        return this.authService.logout();
    }
}