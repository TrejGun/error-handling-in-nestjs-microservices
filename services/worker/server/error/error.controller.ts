import {Controller, UseFilters} from "@nestjs/common";
import {MessagePattern, Payload} from "@nestjs/microservices";

import {IPayload, ErrorService} from "./error.service";
import {HttpToRpcExceptionConverter} from "../common/filters";

@Controller()
export class ErrorController {
  constructor(private potatoService: ErrorService) {}

  @MessagePattern("HTTP_ERROR")
  @UseFilters(HttpToRpcExceptionConverter)
  public http(@Payload() payload: IPayload): Promise<void> {
    return this.potatoService.getHttpError(payload);
  }

  @MessagePattern("RPC_ERROR")
  public rpc(@Payload() payload: IPayload): Promise<void> {
    return this.potatoService.getRpcError(payload);
  }
}
