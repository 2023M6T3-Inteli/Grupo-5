/** nestjs */
import { Module } from "@nestjs/common";

/** controllers */
import { ProjectController } from "./project.controller";
////////////////////////////////////////////////////////////////////////////////

@Module({
  controllers: [ProjectController],
})
export class ProjectModule {}
