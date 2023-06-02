/** nestjs */
import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";

/** modules */
import { UserModule } from "./user/user.module";
import { PostModule } from "./post/post.module";
import { ProjectModule } from "./project/project.module";
import { TypeOrmModule } from "@nestjs/typeorm";
import { ApplyModule } from "./applies/apply.module";

@Module({
  imports: [
    ApplyModule,
    UserModule,
    PostModule,
    ProjectModule,
    /** runtime environment variables (e.g. OS shell exports) take precedence */
    ConfigModule.forRoot({
      cache: true,
      isGlobal: true,
      ignoreEnvFile: process.env.NODE_ENV === "prod" ? true : false,
    }),
    TypeOrmModule.forRoot({
      type: "sqlite",
      database: "database.sqlite",
      autoLoadEntities: true,
      synchronize: true,
    }),
  ],
})
export class AppModule {}
