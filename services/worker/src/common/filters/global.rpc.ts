import {ArgumentsHost, Catch, RpcExceptionFilter} from "@nestjs/common";
import {Observable, throwError} from "rxjs";
import {RpcException} from "@nestjs/microservices";

@Catch(RpcException)
export class GlobalRpcExceptionFilter implements RpcExceptionFilter<RpcException> {
  catch(exception: RpcException, host: ArgumentsHost): Observable<any> {
    console.info("GlobalRpcExceptionFilter", exception, host);
    return throwError(() => exception.getError());
  }
}
