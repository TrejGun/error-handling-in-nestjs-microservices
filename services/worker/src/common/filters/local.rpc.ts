import {ArgumentsHost, Catch, RpcExceptionFilter} from "@nestjs/common";
import {RpcException} from "@nestjs/microservices";
import {Observable, throwError} from "rxjs";

@Catch(RpcException)
export class LocalRpcExceptionFilter implements RpcExceptionFilter<RpcException> {
  catch(exception: RpcException, host: ArgumentsHost): Observable<any> {
    console.info("LocalRpcExceptionFilter", exception, host);
    return throwError(() => exception.getError());
  }
}
