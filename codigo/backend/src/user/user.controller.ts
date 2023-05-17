/** nestjs */
import { Controller, Post, Body, HttpCode } from "@nestjs/common";

/** providers */
import { UserService } from "./user.service";

/** dependencies */
import { LoginDto } from "./dto/login.dto";
////////////////////////////////////////////////////////////////////////////////

export interface LoginResponse {
  accessToken: string;
}

@Controller("user")
export class UserController {
  constructor(private readonly userService: UserService) {}

  @HttpCode(200)
  @Post("login")
  login(@Body() loginDto: LoginDto): Promise<LoginResponse> {
    return this.userService.login(loginDto);
  }
}
