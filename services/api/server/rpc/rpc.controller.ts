import {Controller, Get, Param, UseFilters} from "@nestjs/common";
import {Observable} from "rxjs";

import {RpcService} from "./rpc.service";
import {ExtendedRpcExceptionsFilter} from "../common/filters";

@Controller("/rpc")
export class RpcController {
  constructor(private rpcService: RpcService) {}

  @Get("/promise/http/:type")
  @UseFilters(ExtendedRpcExceptionsFilter)
  public getHttpErrorAsPromise(@Param("type") type: string): Promise<any> {
    return this.rpcService.getHttpErrorAsPromise(type);
  }

  @Get("/observable/http/:type")
  @UseFilters(ExtendedRpcExceptionsFilter)
  public getHttpErrorAsObservable(@Param("type") type: string): Observable<any> {
    return this.rpcService.getHttpErrorAsObservable(type);
  }

  @Get("/promise/rpc/:type")
  @UseFilters(ExtendedRpcExceptionsFilter)
  public getRpcErrorAsPromise(@Param("type") type: string): Promise<any> {
    return this.rpcService.getRpcErrorAsPromise(type);
  }

  @Get("/observable/rpc/:type")
  @UseFilters(ExtendedRpcExceptionsFilter)
  public getRpcErrorAsObservable(@Param("type") type: string): Observable<any> {
    return this.rpcService.getRpcErrorAsObservable(type);
  }
}
