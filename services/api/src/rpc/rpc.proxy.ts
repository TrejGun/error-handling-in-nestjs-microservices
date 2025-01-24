import {InternalServerErrorException, HttpException} from "@nestjs/common";
import {ClientRMQ} from "@nestjs/microservices";

export class ErrorHandlingProxy extends ClientRMQ {
  serializeError(err: Error): HttpException {
    console.info("ErrorHandlingProxy");
    return new InternalServerErrorException(err);
  }
}
