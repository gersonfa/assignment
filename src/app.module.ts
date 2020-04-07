import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AccountModule } from './account/account.module';
import { TransactionModule } from './transaction/transaction.module';
import { DbModule } from './db/db.module';

@Module({
  imports: [AccountModule, TransactionModule, DbModule],
  controllers: [AppController],
  providers: [AppService],
  exports: [AppService]
})
export class AppModule {}
