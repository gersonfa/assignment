import { Controller, Post, Body, Get, Param, HttpException, NotFoundException } from '@nestjs/common';
import { TransactionService } from './transaction.service';
import { AccountService } from 'src/account/account.service';
import { CreateTransactionDto } from './transaction.dto';
import { BadRequestException } from '@nestjs/common';
import { TransactionModel } from './transaction.model';
import { ApiTags } from '@nestjs/swagger';

@Controller('transaction')
@ApiTags('transaction')
export class TransactionController {
    constructor(
        private transactionService: TransactionService,
        private accountService: AccountService
    ) { }

    @Post()
    async create(@Body() transaction: CreateTransactionDto) {
        let senderAccount = this.accountService.findOne(transaction.fromAccount)

        if (!senderAccount) {
            throw new NotFoundException('Sender account does not exist')
        }

        let receiverAccount = this.accountService.findOne(transaction.toAccount)

        if (!receiverAccount) {
            throw new NotFoundException('Receiver account does not exist')
        }

        if ((senderAccount.balance - transaction.amount) < 0) {
            throw new BadRequestException('Insufficient funds')
        }

        const createdTransaction = new TransactionModel(transaction)

        senderAccount.balance -= createdTransaction.amount
        this.accountService.updateOne(senderAccount.account, senderAccount)

        receiverAccount.balance += createdTransaction.amount
        this.accountService.updateOne(receiverAccount.account, receiverAccount)


        return this.transactionService.create(createdTransaction)
    }

    @Get('all/:account')
    allTransactions(@Param('account') accountNumber: number) {
        const account = this.accountService.findOne(accountNumber)

        if (!account) {
            throw new NotFoundException('Account does not exist')
        }

        return {
            transactions: this.transactionService.listByAccount(accountNumber)
        }
    }

    @Get('sended/:account')
    sendedTransactions(@Param('account') accountNumber: number) {
        const account = this.accountService.findOne(accountNumber)

        if (!account) {
            throw new NotFoundException('Account does not exist')
        }

        return {
            transactions: this.transactionService.listByAccountSent(accountNumber)
        }
    }

    @Get('received/:account')
    receivedTransactions(@Param('account') accountNumber: number) {
        const account = this.accountService.findOne(accountNumber)

        if (!account) {
            throw new NotFoundException('Account does not exist')
        }

        return {
            transactions: this.transactionService.listByAccountReceive(accountNumber)
        }
    }
}
