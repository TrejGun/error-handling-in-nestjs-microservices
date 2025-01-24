import {Test, TestingModule} from "@nestjs/testing";
import {ClientsModule, Transport} from "@nestjs/microservices";
import {ConfigModule, ConfigService} from "@nestjs/config";

import {RpcService} from "./rpc.service";
import {ErrorHandlingProxy} from "./rpc.proxy";

describe("UserService", () => {
  let service: RpcService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
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
                useClass: ErrorHandlingProxy,
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
      providers: [RpcService],
    }).compile();

    service = module.get<RpcService>(RpcService);
  });

  it("should be defined", () => {
    expect(service).toBeDefined();
  });
});
