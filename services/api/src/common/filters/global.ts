import {ArgumentsHost, Catch, HttpException, InternalServerErrorException} from "@nestjs/common";
import {BaseExceptionFilter} from "@nestjs/core";

@Catch(Error)
export class NativeToHttpExceptionFilter extends BaseExceptionFilter<HttpException> {
  catch(exception: Error, host: ArgumentsHost): any {
    // eslint-disable-next-line promise/valid-params
    return super.catch(new InternalServerErrorException(exception.message), host);
  }
}
