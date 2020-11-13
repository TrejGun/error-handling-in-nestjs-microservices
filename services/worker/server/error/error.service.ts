import {Observable} from "rxjs";
import {Injectable, ImATeapotException, BadRequestException} from "@nestjs/common";
import {Client, ClientProxy, Transport, RpcException} from "@nestjs/microservices";


export interface IPayload {
  type: string;
}

@Injectable()
export class ErrorService {
  @Client({
    transport: Transport.RMQ,
    options: {
      urls: [process.env.RMQ_URL],
      queue: process.env.RMQ_QUEUE,
    },
  })
  client: ClientProxy;

  public getHttpErrorAsPromise(payload: IPayload): Promise<any> {
    console.info(`Got type from api: ${payload.type}`);
    switch (payload.type) {
      case "TEAPOT":
        throw new ImATeapotException();
      default:
        throw new BadRequestException();
    }
  }

  public getRpcErrorAsPromise(payload: IPayload): Promise<any> {
    console.info(`Got type from api: ${payload.type}`);
    switch (payload.type) {
      case "TEAPOT":
        throw new RpcException(payload.type);
      default:
        throw new RpcException("default");
    }
  }

  public getHttpErrorAsObservable(payload: IPayload): Observable<any> {
    console.info(`Got type from api: ${payload.type}`);
    switch (payload.type) {
      case "TEAPOT":
        throw new ImATeapotException();
      default:
        throw new BadRequestException();
    }
  }

  public getRpcErrorAsObservable(payload: IPayload): Observable<any> {
    console.info(`Got type from api: ${payload.type}`);
    switch (payload.type) {
      case "TEAPOT":
        throw new RpcException(payload.type);
      default:
        throw new RpcException("default");
    }
  }
}
