import {BadRequestException, Injectable} from "@nestjs/common";

import {CustomImATeapotException} from "./teapot.exception";

@Injectable()
export class TeapotService {
  public getError(type: string): Promise<void> {
    switch (type) {
      case "TEAPOT":
        throw new CustomImATeapotException();
      default:
        throw new BadRequestException();
    }
  }
}
