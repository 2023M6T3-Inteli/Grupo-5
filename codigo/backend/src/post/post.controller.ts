/** nestjs */
import {
  Controller,
  Get,
  Post as NestPost,
  Body,
  Patch,
  Param,
  Delete,
  Req,
  UseGuards,
} from "@nestjs/common";

/** service */
import { PostService } from "./post.service";

/** dependencies */
import { CreatePostDto } from "./dto/create-post.dto";
import { Post } from "./entities/post.entity";
import { User } from "../user/entities/user.entity";
import { AuthGuard } from "src/user/guards/auth.guard";
import { UserService } from "src/user/user.service";
////////////////////////////////////////////////////////////////////////////////

export interface PassportRequest extends Request {
  user?: User;
}

@Controller("post")
export class PostController {
  constructor(
    private readonly postService: PostService,
    private readonly userService: UserService
  ) {}

  @UseGuards(AuthGuard)
  @NestPost()
  async create(
    @Req() req: PassportRequest,
    @Body() createPostDto: CreatePostDto
  ): Promise<Post> {
    const user = await this.userService.findByEmail(req.user.email);
    return await this.postService.create(createPostDto, user.userIdLegacy);
  }

  @Get()
  findAll(): Promise<Post[]> {
    return this.postService.findAll();
  }

  @Get(":id")
  findOne(@Param("id") id: number) {
    return this.postService.findOne(id);
  }
}
