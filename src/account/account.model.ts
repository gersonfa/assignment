export class AccountModel {
    id: number;
    account: number;
    owner: number;
    balance: number;
    createdAt: Date;


    constructor(init?: Partial<AccountModel>) {
        Object.assign(this, init);

        this.createdAt = new Date();
        this.id = Math.floor(Math.random() * (1000 - 1)) + 1;
    }
}