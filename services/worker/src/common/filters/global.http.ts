import {Catch, HttpException} from "@nestjs/common";
import {Observable, throwError} from "rxjs";
import {BaseRpcExceptionFilter, RpcException} from "@nestjs/microservices";

@Catch(HttpException)
export class GlobalHttpExceptionFilter extends BaseRpcExceptionFilter<HttpException> {
  catch(exception: HttpException): Observable<any> {
    return throwError(new RpcException(exception.message));
  }
}
