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
import { Apply } from "./entities/apply.entity";
import { CreateApplyDto } from "./dto/create-apply.dto";
import { HttpService } from "@nestjs/axios";
import { firstValueFrom } from "rxjs";
import { AuthGuard } from "src/user/guards/auth.guard";

////////////////////////////////////////////////////////////////////////////////

@Controller("apply")
export class ApplyController {
  constructor(private readonly httpService: HttpService) {}

  @UseGuards(AuthGuard)
  @NestPost()
  async create(@Headers() headers, @Body() applyData: CreateApplyDto) {
    const token = headers.authorization;
    const config = {
      headers: {
        Authorization: token,
      },
    };
    const { data } = await firstValueFrom(
      this.httpService.post(
        "http://localhost:3001/Apply/create",
        applyData,
        config
      )
    );
    return data;
  }

  @UseGuards(AuthGuard)
  @Get("/projects/:projectId")
  async getApplyByProjectId(@Param("projectId") projectId, @Headers() headers) {
    const token = headers.authorization;
    const config = {
      headers: {
        Authorization: token,
      },
    };
    const { data } = await firstValueFrom(
      this.httpService.get(
        `http://localhost:3001/Apply/projects/${projectId}`,
        config
      )
    );
    return data;
  }

  @UseGuards(AuthGuard)
  @Get("/users/:userId")
  async getApplyByUserId(@Param("userId") userId, @Headers() headers) {
    const token = headers.authorization;
    const config = {
      headers: {
        Authorization: token,
      },
    };
    const { data } = await firstValueFrom(
      this.httpService.get(
        `http://localhost:3001/Apply/users/${userId}`,
        config
      )
    );
    return data;
  }

  @UseGuards(AuthGuard)
  @Put("update/:id")
  async update(
    @Param("id") id,
    @Body() applyData: CreateApplyDto,
    @Headers() headers
  ) {
    const token = headers.authorization;
    const config = {
      headers: {
        Authorization: token,
      },
    };
    const { data } = await firstValueFrom(
      this.httpService.put(
        `http://localhost:3001/Apply/update/${id}`,
        applyData,
        config
      )
    );
    return data;
  }

  @UseGuards(AuthGuard)
  @Delete("delete/:id")
  async delete(@Param("id") id, @Headers() headers) {
    const token = headers.authorization;
    const config = {
      headers: {
        Authorization: token,
      },
    };
    const { data } = await firstValueFrom(
      this.httpService.delete(
        `http://localhost:3001/Apply/delete/${id}`,
        config
      )
    );
    return data;
  }

  @UseGuards(AuthGuard)
  @Put("updateFeedback/:id")
  async updateFeedback(
    @Param("id") id,
    @Body() applyData: any,
    @Headers() headers
  ) {
    const token = headers.authorization;
    const config = {
      headers: {
        Authorization: token,
      },
    };
    const { data } = await firstValueFrom(
      this.httpService.put(
        `http://localhost:3001/Apply/updateFeedback/${id}`,
        {
          feedback: applyData.feedback,
          status: applyData.status,
        },
        config
      )
    );
    return data;
  }

  @UseGuards(AuthGuard)
  @Get("/approve/:id")
  async approve(@Param("id") id, @Headers() headers) {
    const token = headers.authorization;
    const config = {
      headers: {
        Authorization: token,
      },
    };
    const { data } = await firstValueFrom(
      this.httpService.get(`http://localhost:3001/Apply/approve/${id}`, config)
    );
    return data;
  }

  @UseGuards(AuthGuard)
  @NestPost("/getApplyByUser")
  async getApply(@Body() applyData: any, @Headers() headers) {
    const token = headers.authorization;
    const config = {
      headers: {
        Authorization: token,
      },
    };
    const { data } = await firstValueFrom(
      this.httpService.post(`http://localhost:3001/Apply/getApplyByUser`, {
        projectId: applyData.projectId,
        userId: applyData.userId
      }, config)
    );
    return data;
  }
}
