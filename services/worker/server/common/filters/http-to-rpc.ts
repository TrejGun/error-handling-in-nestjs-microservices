import {Catch, RpcExceptionFilter, HttpException} from "@nestjs/common";
import {Observable, throwError} from "rxjs";
import {RpcException, BaseRpcExceptionFilter} from "@nestjs/microservices";

@Catch(HttpException)
export class HttpToRpcExceptionFilter extends BaseRpcExceptionFilter implements RpcExceptionFilter<HttpException> {
  catch(exception: HttpException): Observable<any> {
    return throwError(new RpcException(exception));
  }
}
