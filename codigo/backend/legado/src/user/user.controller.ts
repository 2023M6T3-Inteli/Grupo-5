/** nestjs */
import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from "@nestjs/common";


/** providers */
import { CreateUserDto } from "./dto/create-user.dto";
import { UpdateUserDto } from "./dto/update-user.dto";
import { User } from "./entities/user.entity";
////////////////////////////////////////////////////////////////////////////////

@Controller("user")
export class UserController {
  public users: User[] = [];

  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    this.users.push({ ...createUserDto, id: this.users.length + 1, score: 0 });
    return this.users[this.users.length - 1];
  }

  @Get()
  findAll() {
    return this.users;
  }

  @Get(":id")
  findOne(@Param("id") id: string) {
    return this.users.find((user) => user.id === +id);
  }

  @Patch(":id")
  update(@Param("id") id: string, @Body() updateUserDto: UpdateUserDto) {
    this.users = this.users.map((user) =>
      user.id === +id ? { ...user, ...updateUserDto } : user
    );
    return this.users.find((user) => user.id === +id);
  }

  @Delete(":id")
  remove(@Param("id") id: string) {
    this.users = this.users.filter((user) => user.id !== +id);
  }
}
