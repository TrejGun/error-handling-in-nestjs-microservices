import {ClientRMQ, RpcException} from "@nestjs/microservices";


export class ErrorHandlingProxy extends ClientRMQ {
  serializeError(err: Error) {
    return new RpcException(err);
  }
}
