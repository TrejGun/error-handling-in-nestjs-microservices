import {Controller} from "@nestjs/common";
import {MessagePattern, Payload} from "@nestjs/microservices";
import {Observable} from "rxjs";

import {IPayload, ErrorService} from "./error.service";

@Controller()
export class ErrorController {
  constructor(private potatoService: ErrorService) {}

  @MessagePattern("GET_HTTP_ERROR_AS_PROMISE")
  public getHttpErrorAsPromise(@Payload() payload: IPayload): Promise<any> {
    return this.potatoService.getHttpErrorAsPromise(payload);
  }

  @MessagePattern("GET_RPC_ERROR_AS_PROMISE")
  public getRpcErrorAsPromise(@Payload() payload: IPayload): Promise<any> {
    return this.potatoService.getRpcErrorAsPromise(payload);
  }

  @MessagePattern("GET_HTTP_ERROR_AS_OBSERVABLE")
  public getHttpErrorAsObservable(@Payload() payload: IPayload): Observable<any> {
    return this.potatoService.getHttpErrorAsObservable(payload);
  }

  @MessagePattern("GET_RPC_ERROR_AS_OBSERVABLE")
  public getRpcErrorAsObservable(@Payload() payload: IPayload): Observable<any> {
    return this.potatoService.getRpcErrorAsObservable(payload);
  }
}
