import {Injectable} from "@nestjs/common";
import {Client, ClientProxy, Transport} from "@nestjs/microservices";
import {Observable} from "rxjs";

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

  public getRpcErrorAsPromise(type: string): Promise<any> {
    return this.client.send("GET_RPC_ERROR_AS_PROMISE", {type}).toPromise();
  }

  public getRpcErrorAsObservable(type: string): Observable<any> {
    return this.client.send("GET_RPC_ERROR_AS_OBSERVABLE", {type});
  }

  public getHttpErrorAsPromise(type: string): Promise<any> {
    return this.client.send("GET_HTTP_ERROR_AS_PROMISE", {type}).toPromise();
  }

  public getHttpErrorAsObservable(type: string): Observable<any> {
    return this.client.send("GET_HTTP_ERROR_AS_OBSERVABLE", {type});
  }
}
