import { ContentDto } from "./dto/content.dto";
const mqtt = require("mqtt");

const protocol = "mqtt";
const host = "mqtt-dashboard.com";
const port = "8884";
const clientId = `recommendation_app`;
// const connectUrl = `${protocol}://${host}:${port}`;
const connectUrl = `${protocol}://${host}`;

const topic = "IA Recommendation";
const client = mqtt.connect(connectUrl, {
  clientId,
  clean: false,
  reconnectPeriod: 1,
  // clean: true,
  // connectTimeout: 4000,
  // reconnectPeriod: 1000,
});

let lastMessage = null

client.on("connect", () => {
  console.log("Connected");
  client.subscribe([topic], () => {
    console.log(`Subscribe to topic '${topic}'`);
  });
});

export class RecommendationService {
  async recommend(body: ContentDto) {
    client.publish(topic, body.content)
    client.on("message", (topic, payload) => {
      lastMessage = payload.toString()
      console.log("Received Message:", topic, payload.toString());
    });

    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(lastMessage);
      }, 2000);
    });
  }
}
