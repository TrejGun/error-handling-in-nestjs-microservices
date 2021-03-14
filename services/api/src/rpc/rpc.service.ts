import {Inject, Injectable} from "@nestjs/common";
import {ClientProxy} from "@nestjs/microservices";
import {Observable} from "rxjs";

@Injectable()
export class RpcService {
  constructor(
    @Inject("DEFAULT_PROXY_CLIENT") private defaultClient: ClientProxy,
    @Inject("CUSTOM_PROXY_CLIENT") private customClient: ClientProxy,
  ) {}

  public getDefaultRpcExceptionAsObservable(): Observable<any> {
    return this.defaultClient.send("GET_RPC_EXCEPTION_AS_OBSERVABLE", {});
  }

  public getDefaultRpcExceptionAsPromise(): Promise<any> {
    return this.defaultClient.send("GET_RPC_EXCEPTION_AS_PROMISE", {}).toPromise();
  }

  public getCustomRpcExceptionAsObservable(): Observable<any> {
    return this.customClient.send("GET_RPC_EXCEPTION_AS_OBSERVABLE", {});
  }

  public getCustomHttpExceptionAsObservable(): Observable<any> {
    return this.customClient.send("GET_HTTP_EXCEPTION_AS_OBSERVABLE", {});
  }
}
