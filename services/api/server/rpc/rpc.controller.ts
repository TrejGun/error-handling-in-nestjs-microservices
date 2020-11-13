import {Controller, Get, Param, UseFilters} from "@nestjs/common";
import {Observable} from "rxjs";

import {RpcService} from "./rpc.service";
import {ExtendedRpcExceptionsFilter} from "../common/filters";

@Controller("/rpc")
export class RpcController {
  constructor(private rpcService: RpcService) {}

  @Get("/promise/extended/:type")
  @UseFilters(ExtendedRpcExceptionsFilter)
  public extendedPromise(@Param("type") type: string): Promise<any> {
    return this.rpcService.getHttpErrorAsPromise(type);
  }

  @Get("/observable/extended/:type")
  @UseFilters(ExtendedRpcExceptionsFilter)
  public extendedObservable(@Param("type") type: string): Observable<any> {
    return this.rpcService.getHttpErrorAsObservable(type);
  }
}
