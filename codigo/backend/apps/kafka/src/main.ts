/** nestjs */
import { NestFactory } from "@nestjs/core";

/** modules */
import { KafkaModule } from "./kafka.module";
////////////////////////////////////////////////////////////////////////////////

async function bootstrap() {
  const app = await NestFactory.create(KafkaModule);
  await app.listen(3000);
}
bootstrap();
