import { Controller, Get, Inject, Param } from '@nestjs/common';
import { ClientProxy, MessagePattern } from '@nestjs/microservices';
import { AppService } from './app.service';
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get('check')
  getHello(): string {
    return this.appService.getHello();
  }

}
