import { Global, Module } from '@nestjs/common';
import { PermissionsController } from './permissions.controller';
import { PermissionsService } from './permissions.service';
import { UserModule } from '../user/user.module';

@Global()
@Module({
  imports: [UserModule],
  controllers: [PermissionsController],
  providers: [PermissionsService],
  exports: [PermissionsService],
})
export class PermissionsModule {}
