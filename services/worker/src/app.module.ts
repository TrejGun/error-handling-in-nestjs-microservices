import "./env";
import {Module} from "@nestjs/common";
import {APP_FILTER} from "@nestjs/core";

import {ErrorModule} from "./error/error.module";
import {HealthModule} from "./health/health.module";
import {GlobalHttpExceptionFilter} from "./common/filters";

@Module({
  providers: [
    {
      provide: APP_FILTER,
      useClass: GlobalHttpExceptionFilter,
    },
  ],
  imports: [HealthModule, ErrorModule],
})
export class ApplicationModule {}
