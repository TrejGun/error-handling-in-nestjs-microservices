import {Module} from "@nestjs/common";

import {TeapotController} from "./teapot.controller";
import {TeapotService} from "./teapot.service";

@Module({
  controllers: [TeapotController],
  providers: [TeapotService],
  exports: [TeapotService],
})
export class TeapotModule {}
