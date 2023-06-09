import { Controller, Post, UseGuards, Req } from "@nestjs/common";
import { AuthGuard } from "@nestjs/passport";

@Controller("auth")
export class AuthController {
    @UseGuards(AuthGuard("local"))
    @Post("login")
    async login(@Req() req: any) {
        return req.user
    }
}