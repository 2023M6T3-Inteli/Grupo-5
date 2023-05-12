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
import { CreateProjectDto } from "./dto/create-project.dto";
import { UpdatePostDto } from "./dto/update-project.dto";
import { Project } from "./entities/project.entity";
// import { UserController } from "../user/user.controller";

////////////////////////////////////////////////////////////////////////////////

@Controller("project")
export class ProjectController {
  private projects: Project[] = [];
  // private userController: UserController;

  @NestPost()
  create(@Body() createProjectDto: CreateProjectDto) {
    this.projects.push({ ...createProjectDto, id: this.projects.length + 1, userId: 1});
    return this.projects[this.projects.length - 1];
  }

  @Get()
  findAll() {
    return this.projects;
  }

  @Get(":id")
  findOne(@Param("id") id: string) {
    return this.projects.find((post) => post.id === +id);
  }

  @Patch(":id")
  update(@Param("id") id: string, @Body() updatePostDto: UpdatePostDto) {
    this.projects = this.projects.map((post) =>
      post.id === +id ? { ...post, ...updatePostDto } : post
    );
    return this.projects.find((post) => post.id === +id);
  }

  @Delete(":id")
  remove(@Param("id") id: string) {
    this.projects = this.projects.filter((post) => post.id !== +id);
  }
}
