/** nestjs */
import { Module } from "@nestjs/common";

/** controllers */
import { PostController } from "./post.controller";
////////////////////////////////////////////////////////////////////////////////

@Module({
  controllers: [PostController],
})
export class PostModule {}
