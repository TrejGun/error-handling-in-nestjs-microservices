import {Controller, UseFilters} from "@nestjs/common";
import {MessagePattern, RpcException} from "@nestjs/microservices";
import {Observable} from "rxjs";

import {LocalRpcExceptionFilter} from "../common/filters/local.rpc";

@Controller()
export class ErrorController {
  @MessagePattern("GET_RPC_EXCEPTION_AS_PROMISE")
  public getRpcExceptionAsPromise(): Promise<any> {
    throw new RpcException("RPC Exception");
  }

  @UseFilters(LocalRpcExceptionFilter)
  @MessagePattern("GET_RPC_EXCEPTION_AS_OBSERVABLE")
  public getRpcExceptionAsObservable(): Observable<any> {
    throw new RpcException("RPC Exception");
  }
}
