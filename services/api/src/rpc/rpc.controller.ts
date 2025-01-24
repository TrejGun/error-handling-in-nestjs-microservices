import {Controller, Get} from "@nestjs/common";
import {Observable} from "rxjs";

import {RpcService} from "./rpc.service";

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
  public getCustomRpcExceptionAsObservable(): Observable<any> {
    return this.rpcService.getCustomRpcExceptionAsObservable();
  }
}
