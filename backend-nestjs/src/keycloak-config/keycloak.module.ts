import { Module } from '@nestjs/common';
import { KeycloakConfigService } from './keycloak.service';

@Module({
  providers: [KeycloakConfigService],
  exports: [KeycloakConfigService],
})
export class KeycloakConfigModule {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  static forRoot(arg0: {
    envFilePath: string[];
    isGlobal: boolean;
  }):
    | import('@nestjs/common').Type<any>
    | import('@nestjs/common').DynamicModule
    | Promise<import('@nestjs/common').DynamicModule>
    | import('@nestjs/common').ForwardReference<any> {
    throw new Error('Method not implemented');
  }
}
