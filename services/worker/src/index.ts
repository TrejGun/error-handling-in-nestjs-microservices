import {NestFactory} from "@nestjs/core";
import {Transport} from "@nestjs/microservices";
import {NestExpressApplication} from "@nestjs/platform-express";

import {ApplicationModule} from "./app.module";

async function bootstrap(): Promise<void> {
  const app = await NestFactory.create<NestExpressApplication>(ApplicationModule);

  app.connectMicroservice(
    {
      transport: Transport.RMQ,
      options: {
        urls: [process.env.RMQ_URL],
        queue: process.env.RMQ_QUEUE,
      },
    },
    {inheritAppConfig: true},
  );

  await app
    .startAllMicroservicesAsync()
    .then(() => console.info(`Worker service is subscribed to ${process.env.RMQ_URL}`));

  await app.listen(process.env.PORT, process.env.HOST, () => {
    console.info(`Email service health check is running on http://${process.env.HOST}:${process.env.PORT}/health`);
  });
}

void bootstrap();
