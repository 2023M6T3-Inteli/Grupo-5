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
  Headers,
  Put,
} from "@nestjs/common";

/** providers */
import { Project } from "./entities/project.entity";
import { CreateProjectDto } from "./dto/create-project.dto";
import { UpdateProjectDto } from "./dto/update-project.dto";
import { HttpService } from "@nestjs/axios";
import { firstValueFrom } from "rxjs";
import { AuthGuard } from "src/user/guards/auth.guard";

////////////////////////////////////////////////////////////////////////////////

@Controller("project")
export class ProjectController {
  private projects: Project[] = [];

  constructor(private readonly httpService: HttpService) {

  }

  @UseGuards(AuthGuard)
  @NestPost()
  async create(@Headers() headers, @Body() projectData: CreateProjectDto) {
    const token = headers.authorization
    const config = {
      headers: {
        "Authorization": token
      }
    }
    const { data } = await firstValueFrom(
      this.httpService.post("http://localhost:3001/Project/Create", projectData, config)
    );
    return data;
  }

  @UseGuards(AuthGuard)
  @Put("update/:projectId")
  async update(@Param("projectId") projectId, @Headers() headers, @Body() projectData: UpdateProjectDto) {
    const token = headers.authorization
    const config = {
      headers: {
        "Authorization": token
      }
    }
    const { data } = await firstValueFrom(
      this.httpService.put(`http://localhost:3001/Project/update/${projectId}`, projectData, config)
    );
    return data;
  }
  // @Delete(":id")
  // remove(@Param("id") id: string) {
  //   this.projects = this.projects.filter((project) => project.id !== +id);
  // }
  @UseGuards(AuthGuard)
  @Delete("delete/:projectId")
  async delete(@Param("projectId") projectId, @Headers() headers) {
    const token = headers.authorization
    const config = {
      headers: {
        "Authorization": token
      }
    }
    const { data } = await firstValueFrom(
      this.httpService.delete(`http://localhost:3001/Project/delete/${projectId}`, config)
    );
    return data;
  }
}