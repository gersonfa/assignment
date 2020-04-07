import { Module } from '@nestjs/common';
import { TransactionController } from './transaction.controller';
import { TransactionService } from './transaction.service';
import { AccountModel } from 'src/account/account.model';
import { DbModule } from 'src/db/db.module';
import { AccountService } from 'src/account/account.service';

@Module({
  imports: [AccountModel, DbModule],
  controllers: [TransactionController],
  providers: [TransactionService, AccountService]
})
export class TransactionModule {}
