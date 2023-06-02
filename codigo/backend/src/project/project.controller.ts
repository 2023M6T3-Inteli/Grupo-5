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
  Header,
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

  @UseGuards(AuthGuard)
  @Get("/allProjects")
  async getAll(@Headers() headers) {
    const token = headers.authorization
    const config = {
      headers: {
        "Authorization": token
      }
    }
    const { data } = await firstValueFrom(
      this.httpService.get(`http://localhost:3001/Project/findAll`, config)
    );
    return data;
  }

  @UseGuards(AuthGuard)
  @Get("/:projectId")
  async getOne(@Param("projectId") projectId, @Headers() Headers) {
    const token = Headers.authorization
    const config = {
      headers: {
        "Authorization": token
      }
    }
    const { data } = await firstValueFrom(
      this.httpService.get(`http://localhost:3001/Project/findByID/${projectId}`, config)
    );
    return data;
  }

  @UseGuards(AuthGuard)
  @NestPost("/filterProjects")
  async filter(@Headers() headers, @Body() projectData: any) {
    const token = headers.authorization
    const config = {
      headers: {
        "Authorization": token
      }
    }
    const { data } = await firstValueFrom(
      this.httpService.post(`http://localhost:3001/Project/filter`, projectData, config)
    );
    return data;
  }

  @UseGuards(AuthGuard)
  @Put("/finalize/:projectId")
  async finalize(@Param("projectId") projectId, @Req() req: any) {
    const token = req.headers.authorization
    const config = {
      headers: {
        "Authorization": token
      }
    }
    const { data } = await firstValueFrom(
      this.httpService.put(`http://localhost:3001/Project/finalize/${projectId}`, {}, config)
    );
    return data;
  }
}