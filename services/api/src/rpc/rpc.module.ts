import {Module} from "@nestjs/common";
import {ClientsModule, Transport} from "@nestjs/microservices";
import {ConfigModule, ConfigService} from "@nestjs/config";

import {RpcController} from "./rpc.controller";
import {RpcService} from "./rpc.service";
import {ErrorHandlingProxy} from "./rpc.proxy";

@Module({
  imports: [
    ClientsModule.registerAsync([
      {
        name: "DEFAULT_PROXY_CLIENT",
        imports: [ConfigModule],
        inject: [ConfigService],
        useFactory: (configService: ConfigService) => {
          const rmqUrl = configService.get<string>("RMQ_URL", "amqp://localhost:5672");
          const rmqQueue = configService.get<string>("RMQ_QUEUE", "queue");
          return {
            transport: Transport.RMQ,
            options: {
              urls: [rmqUrl],
              queue: rmqQueue,
            },
          };
        },
      },
      {
        name: "CUSTOM_PROXY_CLIENT",
        imports: [ConfigModule],
        inject: [ConfigService],
        useFactory: (configService: ConfigService) => {
          const rmqUrl = configService.get<string>("RMQ_URL", "amqp://localhost:5672");
          const rmqQueue = configService.get<string>("RMQ_QUEUE", "queue");
          return {
            customClass: ErrorHandlingProxy,
            transport: Transport.RMQ,
            options: {
              urls: [rmqUrl],
              queue: rmqQueue,
            },
          };
        },
      },
    ]),
  ],
  controllers: [RpcController],
  providers: [RpcService],
  exports: [RpcService],
})
export class RpcModule {}
