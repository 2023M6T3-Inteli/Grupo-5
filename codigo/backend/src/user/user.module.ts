/** nestjs */
import { Module } from "@nestjs/common";
import { HttpModule } from "@nestjs/axios";
import { TypeOrmModule } from "@nestjs/typeorm";

/** controllers */
import { UserController } from "./user.controller";

/** providers */
import { UserService } from "./user.service";

/** dependencies */
import { User } from "./entities/user.entity";
////////////////////////////////////////////////////////////////////////////////

@Module({
  imports: [HttpModule, TypeOrmModule.forFeature([User])],
  controllers: [UserController],
  providers: [UserService],
})
export class UserModule {}
