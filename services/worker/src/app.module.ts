import {Module} from "@nestjs/common";
import {APP_FILTER} from "@nestjs/core";
import {ConfigModule} from "@nestjs/config";

import {ErrorModule} from "./error/error.module";
import {HealthModule} from "./health/health.module";
import {GlobalRpcExceptionFilter} from "./common/filters";

@Module({
  providers: [
    {
      provide: APP_FILTER,
      useClass: GlobalRpcExceptionFilter,
    },
  ],
  imports: [ConfigModule.forRoot(), HealthModule, ErrorModule],
})
export class ApplicationModule {}
