/** nestjs */
import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";

/** modules */
import { UserModule } from "./user/user.module";
import { PostModule } from "./post/post.module"
import { ProfileModule } from './profile/profile.module';

////////////////////////////////////////////////////////////////////////////////

@Module({
  imports: [
    UserModule,
    PostModule,
    /** runtime environment variables (e.g. OS shell exports) take precedence */
    ConfigModule.forRoot({
      cache: true,
      isGlobal: true,
      ignoreEnvFile: process.env.NODE_ENV === "prod" ? true : false,
    }),
    ProfileModule,
  ],
})
export class AppModule {}
