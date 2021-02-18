import {ArgumentsHost, Catch, ImATeapotException} from "@nestjs/common";
import {BaseExceptionFilter} from "@nestjs/core";

@Catch(ImATeapotException)
export class GlobalCustomExceptionFilter extends BaseExceptionFilter<ImATeapotException> {
  catch(exception: ImATeapotException, host: ArgumentsHost): any {
    console.info("GlobalCustomExceptionFilter", exception);
    return super.catch(exception, host);
  }
}
