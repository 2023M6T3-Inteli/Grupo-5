/** nestjs */
import { Module } from "@nestjs/common";

/** controllers */
import { ApplyController } from "./apply.controller";
import { HttpModule } from "@nestjs/axios";
////////////////////////////////////////////////////////////////////////////////

@Module({
    imports: [HttpModule],
  controllers: [ApplyController],
})
export class ApplyModule {}
