import {Module} from "@nestjs/common";

import {HealthModule} from "./health/health.module";
import {RpcModule} from "./rpc/rpc.module";
import {HttpModule} from "./http/http.module";
import {TeapotModule} from "./teapot/teapot.module";

@Module({
  imports: [HealthModule, TeapotModule, RpcModule, HttpModule],
})
export class AppModule {}
