import {Module} from "@nestjs/common";

import {HttpController} from "./http.controller";

@Module({
  controllers: [HttpController],
})
export class HttpModule {}
