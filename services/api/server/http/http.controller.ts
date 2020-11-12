import {Controller, Get, Param, UseFilters} from "@nestjs/common";
import {HttpService} from "./http.service";

import {CustomHttpExceptionFilter, ExtendedHttpExceptionFilter} from "../common/filters";

@Controller("/http")
export class HttpController {
  constructor(private httpService: HttpService) {}

  @Get("/extended/:type")
  @UseFilters(ExtendedHttpExceptionFilter)
  public all(@Param("type") type: string): Promise<void> {
    return this.httpService.getError(type);
  }

  @Get("/custom/:type")
  @UseFilters(CustomHttpExceptionFilter)
  public rpc(@Param("type") type: string): Promise<void> {
    return this.httpService.getError(type);
  }

  @Get("/skipped/:type")
  public any(@Param("type") type: string): Promise<void> {
    return this.httpService.getError(type);
  }
}
