export class TransactionModel {
    id: number;
    fromAccount: number;
    toAccount: number;
    amount: number;
    createdAt: Date;

    constructor(init?: Partial<TransactionModel>) {
        Object.assign(this, init);

        this.createdAt = new Date();
        this.id = Math.floor(Math.random() * (1000 - 1)) + 1;
    }
}