/** nestjs */
import {
  Controller,
  Get,
  Post as NestPost,
  Body,
  Patch,
  Param,
  Delete,
} from "@nestjs/common";

/** providers */
import { CreatePostDto } from "./dto/create-post.dto";
import { UpdatePostDto } from "./dto/update-post.dto";
import { Post } from "./entities/post.entity";
// import { UserController } from "../user/user.controller";

////////////////////////////////////////////////////////////////////////////////

@Controller("post")
export class PostController {
  private posts: Post[] = [];
  // private userController: UserController;

  @NestPost()
  create(@Body() createPostDto: CreatePostDto) {
    this.posts.push({ ...createPostDto, id: this.posts.length + 1});
    return this.posts[this.posts.length - 1];
  }

  @Get()
  findAll() {
    return this.posts;
  }

  @Get(":id")
  findOne(@Param("id") id: string) {
    return this.posts.find((post) => post.id === +id);
  }

  @Patch(":id")
  update(@Param("id") id: string, @Body() updatePostDto: UpdatePostDto) {
    this.posts = this.posts.map((post) =>
      post.id === +id ? { ...post, ...updatePostDto } : post
    );
    return this.posts.find((post) => post.id === +id);
  }

  @Delete(":id")
  remove(@Param("id") id: string) {
    this.posts = this.posts.filter((post) => post.id !== +id);
  }
}
