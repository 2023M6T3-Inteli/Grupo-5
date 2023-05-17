/** nestjs */
import { NestFactory } from "@nestjs/core";
import { Transport } from "@nestjs/microservices";
import { NestMicroserviceOptions } from "@nestjs/common/interfaces/microservices/nest-microservice-options.interface";

/** modules */
import { KafkaModule } from "./kafka.module";
////////////////////////////////////////////////////////////////////////////////

/** bootstrap project */
(async function () {
  /** instantiate new microservice */
  const app = await NestFactory.createMicroservice(KafkaModule, {
    /** microservice options */
    transport: Transport.KAFKA,
    options: {
      client: {
        clientId: "kafka",
        brokers: ["localhost:9092"],
      },
      consumer: {
        groupId: "kafka-consumer",
      },
      topic: "kafka-topic",
    },
  });
})();
