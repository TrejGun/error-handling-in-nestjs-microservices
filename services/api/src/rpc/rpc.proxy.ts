import {ClientRMQ, RpcException} from "@nestjs/microservices";


export class ErrorHandlingProxy extends ClientRMQ {
  serializeError(err: Error): RpcException {
    return new RpcException(err);
  }
}
