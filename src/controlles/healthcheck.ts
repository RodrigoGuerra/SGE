import { Controller, Get } from '@nestjs/common';
import { HealthCheck, HealthCheckService } from '@nestjs/terminus';

@Controller('/')
export class HealthCheckController {
  constructor(private healthCheckService: HealthCheckService) {}

  @Get()
  @HealthCheck()
  checkHealth() {
    return this.healthCheckService.check([]);
  }
}
