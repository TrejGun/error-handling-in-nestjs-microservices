import {Controller, Get, Param, UseFilters} from "@nestjs/common";
import {TeapotService} from "./teapot.service";

import {CustomTeapotExceptionFilter} from "../common/filters";

@Controller("/teapot")
export class TeapotController {
  constructor(private teapotService: TeapotService) {}

  @Get("/custom/:type")
  @UseFilters(CustomTeapotExceptionFilter)
  public rpc(@Param("type") type: string): Promise<void> {
    return this.teapotService.getError(type);
  }

  @Get("/skipped/:type")
  public any(@Param("type") type: string): Promise<void> {
    return this.teapotService.getError(type);
  }
}
