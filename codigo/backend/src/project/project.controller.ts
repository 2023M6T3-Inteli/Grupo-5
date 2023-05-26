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
import { Project } from "./entities/project.entity";
import { CreateProjectDto } from "./dto/create-project.dto";
import { UpdateProjectDto } from "./dto/update-project.dto";
import { HttpService } from "@nestjs/axios";
import { firstValueFrom } from "rxjs";

////////////////////////////////////////////////////////////////////////////////

@Controller("project")
export class ProjectController {
  private projects: Project[] = [];
  
  constructor(private readonly httpService: HttpService) {
    
  }

  @NestPost()
  async create(@Body() createProjectDto: CreateProjectDto, config: any) {
    // const { data } = await firstValueFrom(
    //   this.httpService.post("http://localhost:3001/Project/Create", createProjectDto, config)
    // );
    // return data;
    this.projects.push({
      ...createProjectDto,
      id: this.projects.length + 1,
      userId: 1,
    });
    return this.projects[this.projects.length - 1];
  }

  @Get()
  findAll() {
    return this.projects;
  }

  @Get(":id")
  findOne(@Param("id") id: string) {
    return this.projects.find((project) => project.id === +id);
  }

  @Patch(":id")
  update(@Param("id") id: string, @Body() updateProjectDto: UpdateProjectDto) {
    this.projects = this.projects.map((project) =>
      project.id === +id ? { ...project, ...updateProjectDto } : project
    );
    return this.projects.find((project) => project.id === +id);
  }

  @Delete(":id")
  remove(@Param("id") id: string) {
    this.projects = this.projects.filter((project) => project.id !== +id);
  }
}
