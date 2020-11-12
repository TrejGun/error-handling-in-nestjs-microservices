import {BadRequestException, ImATeapotException, Injectable} from "@nestjs/common";

@Injectable()
export class HttpService {
  public getError(type: string): Promise<void> {
    switch (type) {
      case "TEAPOT":
        throw new ImATeapotException();
      default:
        throw new BadRequestException();
    }
  }
}
