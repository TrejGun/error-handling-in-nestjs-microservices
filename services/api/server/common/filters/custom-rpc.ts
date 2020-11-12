import {Catch, RpcExceptionFilter} from "@nestjs/common";
import {Observable, throwError} from "rxjs";
import {RpcException} from "@nestjs/microservices";

@Catch()
export class CustomRpcExceptionFilter implements RpcExceptionFilter<RpcException> {
  catch(exception: RpcException): Observable<any> {
    console.info("CustomRpcExceptionFilter", exception instanceof RpcException, exception);
    return throwError(exception.getError());
  }
}
