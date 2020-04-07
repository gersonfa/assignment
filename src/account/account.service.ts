import { Injectable } from '@nestjs/common';
import { AccountModel } from './account.model';
import { DbService } from 'src/db/db.service';

@Injectable()
export class AccountService {
    constructor(protected service: DbService) { }

    create(account: AccountModel) {
        let accounts = this.service.accounts;
        accounts.push(account);

        this.service.accounts = accounts;

        return account;
    }

    list() {
        return this.service.accounts
    }

    findOne(accountNumber: number) {
        return this.service.accounts.find(a => a.account == accountNumber)
    }

    updateOne(accountNumber: number, account: AccountModel) {
        let accounts = this.service.accounts.map(a => {
            if (a.account == accountNumber) {
                a = account
            }

            return a
        })

        this.service.accounts = accounts
    }

}
