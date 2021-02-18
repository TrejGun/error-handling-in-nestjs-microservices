import {ArgumentsHost, Catch, HttpException} from "@nestjs/common";
import {BaseExceptionFilter} from "@nestjs/core";
import {RpcException} from "@nestjs/microservices";

@Catch(RpcException)
export class LocalRpcExceptionFilter extends BaseExceptionFilter {
  catch(exception: RpcException, host: ArgumentsHost): any {
    console.info("LocalRpcExceptionFilter", exception);
    return super.catch(new HttpException(exception.message, 777), host);
  }
}
