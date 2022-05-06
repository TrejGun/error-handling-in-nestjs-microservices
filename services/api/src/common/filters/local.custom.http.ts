import {ArgumentsHost, Catch, ImATeapotException} from "@nestjs/common";
import {BaseExceptionFilter} from "@nestjs/core";

@Catch(ImATeapotException)
export class LocalCustomHttpExceptionFilter extends BaseExceptionFilter<ImATeapotException> {
  catch(exception: ImATeapotException, host: ArgumentsHost): any {
    console.info("LocalCustomHttpExceptionFilter", exception);
    // eslint-disable-next-line promise/valid-params
    return super.catch(exception, host);
  }
}
