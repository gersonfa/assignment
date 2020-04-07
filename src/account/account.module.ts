import { Module } from '@nestjs/common';
import { AccountController } from './account.controller';
import { AccountService } from './account.service';
import { AppModule } from 'src/app.module';
import { DbModule } from 'src/db/db.module';

@Module({
  imports: [DbModule],
  exports: [AccountService],
  controllers: [AccountController],
  providers: [AccountService],
})
export class AccountModule {}
