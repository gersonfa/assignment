import { Injectable } from '@nestjs/common';
import { AppService } from 'src/app.service';
import { TransactionModel } from './transaction.model';
import { DbService } from 'src/db/db.service';

@Injectable()
export class TransactionService {
    constructor(protected service: DbService) { }

    create(transaction: TransactionModel) {
        let transactions = this.service.transactions;
        transactions.push(transaction);

        this.service.transactions = transactions;

        return transaction;
    }

    listByAccount(accountNumber: number) {
        return this.service.transactions.filter(t => t.fromAccount == accountNumber || t.toAccount == accountNumber)
    }

    listByAccountSent(accountNumber: number) {
        return this.service.transactions.filter(t => t.fromAccount == accountNumber)
    }

    listByAccountReceive(accountNumber: number) {
        return this.service.transactions.filter(t => t.toAccount == accountNumber)
    }


}
