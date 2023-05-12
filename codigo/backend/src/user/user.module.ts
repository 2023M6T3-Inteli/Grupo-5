/** nestjs */
import { Module } from "@nestjs/common";

/** controllers */
import { UserController } from "./user.controller";
////////////////////////////////////////////////////////////////////////////////

@Module({
  controllers: [UserController],
})
export class UserModule {}
