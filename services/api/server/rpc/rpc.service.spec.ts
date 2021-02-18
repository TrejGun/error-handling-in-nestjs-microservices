import {Test, TestingModule} from "@nestjs/testing";
import {ClientsModule, Transport} from "@nestjs/microservices";

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
            useFactory: () => ({
              transport: Transport.RMQ,
              options: {
                urls: [process.env.RMQ_URL],
                queue: process.env.RMQ_QUEUE,
              },
            }),
          },
          {
            name: "CUSTOM_PROXY_CLIENT",
            useFactory: () => ({
              customClass: ErrorHandlingProxy,
              transport: Transport.RMQ,
              options: {
                urls: [process.env.RMQ_URL],
                queue: process.env.RMQ_QUEUE,
              },
            }),
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
