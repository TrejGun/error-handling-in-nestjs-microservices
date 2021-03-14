import {Module} from "@nestjs/common";
import {APP_FILTER} from "@nestjs/core";

import {HealthModule} from "./health/health.module";
import {RpcModule} from "./rpc/rpc.module";
import {HttpModule} from "./http/http.module";
import {GlobalCustomExceptionFilter, NativeToHttpExceptionFilter, GlobalHttpExceptionFilter} from "./common/filters";

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
    {
      provide: APP_FILTER,
      useClass: NativeToHttpExceptionFilter,
    },
  ],
  imports: [HealthModule, HttpModule, RpcModule],
})
export class AppModule {}
