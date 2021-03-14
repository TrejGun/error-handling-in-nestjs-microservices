import {Controller, Get, UseFilters} from "@nestjs/common";
import {Observable} from "rxjs";

import {RpcService} from "./rpc.service";
import {LocalRpcExceptionFilter} from "../common/filters";

@Controller("/rpc")
export class RpcController {
  constructor(private rpcService: RpcService) {}

  @Get("/default")
  public getDefaultRpcExceptionAsObservable(): Observable<any> {
    return this.rpcService.getDefaultRpcExceptionAsObservable();
  }

  @Get("/default-promise")
  public getDefaultRpcExceptionAsPromise(): Promise<any> {
    return this.rpcService.getDefaultRpcExceptionAsPromise();
  }

  @Get("/custom")
  @UseFilters(LocalRpcExceptionFilter)
  public getCustomRpcExceptionAsObservable(): Observable<any> {
    return this.rpcService.getCustomRpcExceptionAsObservable();
  }

  @Get("/custom-http")
  @UseFilters(LocalRpcExceptionFilter)
  public getDefaultHttpExceptionAsObservable(): Observable<any> {
    return this.rpcService.getCustomHttpExceptionAsObservable();
  }
}
