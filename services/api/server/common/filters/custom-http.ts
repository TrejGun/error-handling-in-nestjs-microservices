import {Catch, ExceptionFilter, HttpException} from "@nestjs/common";
import {throwError} from "rxjs";

@Catch(HttpException)
export class CustomHttpExceptionFilter implements ExceptionFilter<HttpException> {
  catch(exception: HttpException) {
    console.info("CustomHttpExceptionFilter", exception instanceof HttpException, exception);
    return throwError(exception.message);
  }
}
