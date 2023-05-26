/** nestjs */
import {
  Post,
  Get,
  Req,
  Body,
  HttpCode,
  UseGuards,
  Controller,
} from "@nestjs/common";

/** providers */
import { UserService } from "./user.service";

/** dependencies */
import { LoginDto } from "./dto/login.dto";
import { AuthGuard } from "./guards/auth.guard";
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

  @UseGuards(AuthGuard)
  @Get("test")
  testJwt(@Req() req: Request) {
    return req["user"];
  }
}
