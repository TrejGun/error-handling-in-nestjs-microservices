import {Module} from "@nestjs/common";
import {APP_FILTER} from "@nestjs/core";

import {HealthModule} from "./health/health.module";
import {RpcModule} from "./rpc/rpc.module";
import {HttpModule} from "./http/http.module";
import {GlobalHttpExceptionFilter} from "./common/filters/global.http";
import {GlobalCustomExceptionFilter} from "./common/filters/global.custom.http";

@Module({
  providers: [
    {
      provide: APP_FILTER,
      useClass: GlobalHttpExceptionFilter,
    },
    {
      provide: APP_FILTER,
      useClass: GlobalCustomExceptionFilter,
    },
  ],
  imports: [HealthModule, HttpModule, RpcModule],
})
export class AppModule {}
