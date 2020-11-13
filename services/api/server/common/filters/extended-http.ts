import {ArgumentsHost, Catch, ExceptionFilter, HttpException} from "@nestjs/common";
import {BaseExceptionFilter} from "@nestjs/core";

@Catch(HttpException)
export class ExtendedHttpExceptionFilter extends BaseExceptionFilter implements ExceptionFilter<HttpException> {
  catch(exception: HttpException, host: ArgumentsHost): void {
    console.info("ExtendedHttpExceptionFilter", exception instanceof HttpException, exception);
    return super.catch(exception, host);
  }
}
