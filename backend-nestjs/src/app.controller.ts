import { Controller, Get, UseGuards } from '@nestjs/common';
import { AppService } from './app.service';
import {
  Public,
  RoleGuard,
  Roles,
  RoleMatchingMode,
  Resource,
  AuthGuard,
  ResourceGuard,
} from 'nest-keycloak-connect';

@Controller()
@UseGuards(AuthGuard, ResourceGuard)
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
