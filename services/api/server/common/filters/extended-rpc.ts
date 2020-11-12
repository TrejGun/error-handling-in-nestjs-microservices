import {ArgumentsHost, Catch} from "@nestjs/common";
import {BaseRpcExceptionFilter, RpcException} from "@nestjs/microservices";
import {Observable} from "rxjs";

@Catch()
export class ExtendedRpcExceptionsFilter extends BaseRpcExceptionFilter {
  catch(exception: unknown, host: ArgumentsHost): Observable<any> {
    console.info("ExtendedRpcExceptionsFilter", exception instanceof RpcException, exception);
    return super.catch(exception, host);
  }
}
