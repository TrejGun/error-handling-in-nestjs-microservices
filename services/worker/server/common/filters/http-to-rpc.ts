import {Catch, RpcExceptionFilter, HttpException} from "@nestjs/common";
import {Observable, throwError} from "rxjs";
import {RpcException} from "@nestjs/microservices";

@Catch(HttpException)
export class HttpToRpcExceptionConverter implements RpcExceptionFilter<HttpException> {
  catch(exception: HttpException): Observable<any> {
    return throwError(new RpcException(exception.message));
  }
}
