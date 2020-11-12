import {Catch, ExceptionFilter} from "@nestjs/common";
import {Observable, throwError} from "rxjs";

import {CustomImATeapotException} from "../../teapot/teapot.exception";

@Catch(CustomImATeapotException)
export class CustomTeapotExceptionFilter implements ExceptionFilter<CustomImATeapotException> {
  catch(exception: CustomImATeapotException): Observable<any> {
    console.info("CustomTeapotExceptionFilter", exception instanceof CustomImATeapotException, exception);
    return throwError(exception.message);
  }
}
