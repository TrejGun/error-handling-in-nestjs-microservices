import "./env";
import {Module} from "@nestjs/common";

import {ErrorModule} from "./error/error.module";
import {HealthModule} from "./health/health.module";

@Module({
  imports: [HealthModule, ErrorModule],
})
export class ApplicationModule {}
