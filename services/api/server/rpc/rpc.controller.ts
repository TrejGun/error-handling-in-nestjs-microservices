import {Controller, Get, Param, UseFilters} from "@nestjs/common";

import {RpcService} from "./rpc.service";
import {CustomRpcExceptionFilter, ExtendedRpcExceptionsFilter} from "../common/filters";

@Controller("/rpc")
export class RpcController {
  constructor(private rpcService: RpcService) {}

  @Get("/extended/:type")
  @UseFilters(ExtendedRpcExceptionsFilter)
  public all(@Param("type") type: string): Promise<any> {
    return this.rpcService.getRpcError(type);
  }

  @Get("/custom/:type")
  @UseFilters(CustomRpcExceptionFilter)
  public rpc(@Param("type") type: string): Promise<any> {
    return this.rpcService.getRpcError(type);
  }

  @Get("/skipped/:type")
  public skip(@Param("type") type: string): Promise<any> {
    return this.rpcService.getRpcError(type);
  }
}
