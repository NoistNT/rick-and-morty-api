import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { ServiceInfo } from './types';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getServiceInfo(): ServiceInfo {
    return this.appService.getServiceInfo();
  }
}
