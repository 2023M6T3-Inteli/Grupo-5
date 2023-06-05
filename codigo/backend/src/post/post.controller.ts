import { Controller, Get, Post as NestPost, Body, Patch, Param, Delete, Req, UseGuards } from "@nestjs/common";
import { PostService } from "./post.service";
import { CreatePostDto } from "./dto/create-post.dto";
import { Post } from "./entities/post.entity";
import { User } from "../user/entities/user.entity";
import { AuthGuard } from "../user/guards/auth.guard";
import { UserService } from "../user/user.service";
import { UpdatePostDto } from "./dto/update-post.dto";
import { DeletePostDto } from "./dto/delete-post.dto";

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

  @Patch(":id")
  async update(
    @Param("id") id: number,
    @Body() updatePostDto: UpdatePostDto
  ): Promise<Post> {
    return await this.postService.update(id, updatePostDto);
  }

  @Delete(":id") // Adicionar o decorador @Delete e o parâmetro de rota ":id"
  async delete(@Param("id") id: number): Promise<void> {
    await this.postService.remove(id);
  }
}
