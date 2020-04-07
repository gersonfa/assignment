import { Injectable } from '@nestjs/common';
import { AccountModel } from 'src/account/account.model';
import { TransactionModel } from 'src/transaction/transaction.model';

@Injectable()
export class DbService {
    private _accounts: AccountModel[] = []
    private _transactions: TransactionModel[] = []

    get transactions(): TransactionModel[] {
        return this._transactions;
    }

    set transactions(transactions: TransactionModel[]) {
        this._transactions = transactions;
    }

    get accounts(): AccountModel[] {
        return this._accounts;
    }

    set accounts(accounts: AccountModel[]) {
        this._accounts = accounts
    }
}
