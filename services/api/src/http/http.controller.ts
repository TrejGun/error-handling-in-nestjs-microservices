import {Controller, Get, ImATeapotException, UseFilters} from "@nestjs/common";

import {LocalCustomHttpExceptionFilter, LocalHttpExceptionFilter} from "../common/filters";

@Controller("/http")
export class HttpController {
  @Get("/default")
  public default(): Promise<void> {
    throw new Error("Simple error");
  }

  @Get("/global")
  public globalHttp(): Promise<void> {
    throw new ImATeapotException();
  }

  @Get("/local")
  @UseFilters(LocalHttpExceptionFilter)
  public localHttp(): Promise<void> {
    throw new ImATeapotException();
  }

  @Get("/global-custom")
  public globalCustomHttp(): Promise<void> {
    throw new ImATeapotException();
  }

  @Get("/local-custom")
  @UseFilters(LocalCustomHttpExceptionFilter)
  public localCustomHttp(): Promise<void> {
    throw new ImATeapotException();
  }
}
