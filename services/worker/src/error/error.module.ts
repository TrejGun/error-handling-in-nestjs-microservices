import {Module} from "@nestjs/common";

import {ErrorController} from "./error.controller";

@Module({
  controllers: [ErrorController],
})
export class ErrorModule {}
