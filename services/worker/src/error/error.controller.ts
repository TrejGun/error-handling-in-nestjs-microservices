import {Controller, ImATeapotException} from "@nestjs/common";
import {MessagePattern, RpcException} from "@nestjs/microservices";
import {Observable} from "rxjs";

@Controller()
export class ErrorController {
  @MessagePattern("GET_RPC_EXCEPTION_AS_PROMISE")
  public getRpcExceptionAsPromise(): Promise<any> {
    throw new RpcException("RPC Exception");
  }

  @MessagePattern("GET_RPC_EXCEPTION_AS_OBSERVABLE")
  public getRpcExceptionAsObservable(): Observable<any> {
    throw new RpcException("RPC Exception");
  }

  @MessagePattern("GET_HTTP_EXCEPTION_AS_OBSERVABLE")
  public getHttpExceptionAsObservable(): Observable<any> {
    throw new ImATeapotException("HTTP Exception");
  }
}
