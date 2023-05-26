/** nestjs */
import { Module } from "@nestjs/common";

/** controllers */
import { ProjectController } from "./project.controller";
import { HttpModule } from "@nestjs/axios";
////////////////////////////////////////////////////////////////////////////////

@Module({
    imports: [HttpModule],
  controllers: [ProjectController],
})
export class ProjectModule {}
