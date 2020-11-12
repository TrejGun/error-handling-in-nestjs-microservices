import {HttpException, HttpStatus} from "@nestjs/common";


export class CustomImATeapotException extends HttpException {
  constructor() {
    super("I am a teapot", HttpStatus.I_AM_A_TEAPOT);
  }
}
