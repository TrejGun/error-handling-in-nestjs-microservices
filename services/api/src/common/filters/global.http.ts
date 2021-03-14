import {ArgumentsHost, Catch, HttpException} from "@nestjs/common";
import {BaseExceptionFilter} from "@nestjs/core";

@Catch(HttpException)
export class GlobalHttpExceptionFilter extends BaseExceptionFilter<HttpException> {
  catch(exception: HttpException, host: ArgumentsHost): any {
    console.info("GlobalHttpExceptionFilter", exception);
    return super.catch(exception, host);
  }
}
