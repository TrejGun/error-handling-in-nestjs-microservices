import {Module} from "@nestjs/common";
import {ClientsModule, Transport} from "@nestjs/microservices";

import {RpcController} from "./rpc.controller";
import {RpcService} from "./rpc.service";
import {ErrorHandlingProxy} from "./rpc.proxy";

@Module({
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
  controllers: [RpcController],
  providers: [RpcService],
  exports: [RpcService],
})
export class RpcModule {}
