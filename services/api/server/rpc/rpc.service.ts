import {Injectable} from "@nestjs/common";
import {Client, ClientProxy, Transport} from "@nestjs/microservices";

@Injectable()
export class RpcService {
  @Client({
    transport: Transport.RMQ,
    options: {
      urls: [process.env.RMQ_URL],
      queue: process.env.RMQ_QUEUE,
    },
  })
  client: ClientProxy;

  public getRpcError(type: string): Promise<any> {
    return this.client.send("RPC_ERROR", {type}).toPromise();
  }

  public getHttpError(type: string): Promise<any> {
    return this.client.send("HTTP_ERROR", {type}).toPromise();
  }
}
