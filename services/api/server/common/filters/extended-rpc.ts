import {ArgumentsHost, Catch, ExceptionFilter, HttpException} from "@nestjs/common";
import {BaseExceptionFilter} from "@nestjs/core";
import {RpcException} from "@nestjs/microservices";

@Catch() // RpcException
export class ExtendedRpcExceptionsFilter extends BaseExceptionFilter implements ExceptionFilter<RpcException> {
  catch(exception: unknown, host: ArgumentsHost): void {
    console.info("ExtendedRpcExceptionsFilter", exception);
    if (exception instanceof HttpException) {
      return super.catch(exception, host);
    } else {
      // RpcException
      // @ts-ignore
      const {error} = exception;
      if (error) {
        // wrapped HttpException
        // const error = exception.getError();
        return super.catch(new HttpException(error.message, error.status), host);
      } else {
        // RpcException
        // @ts-ignore
        return super.catch(new HttpException(exception.message, 500), host);
      }
    }
  }
}
