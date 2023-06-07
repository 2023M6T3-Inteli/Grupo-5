/** nestjs */
import { MiddlewareConsumer, Module, NestModule } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";

/** modules */
import { UserModule } from "./user/user.module";
import { PostModule } from "./post/post.module";
import { ProjectModule } from "./project/project.module";
import { TypeOrmModule } from "@nestjs/typeorm";
import { LoggerMiddleware } from "./logger.middleware";

@Module({
  imports: [
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
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes("*");
  }
}
