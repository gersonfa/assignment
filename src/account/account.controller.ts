import { Controller, Post, Body, Get, Param, HttpException, NotFoundException } from '@nestjs/common';
import { AccountService } from './account.service';
import { CreateAccountDto } from './account.dto';
import { AccountModel } from './account.model';
import { ApiTags } from '@nestjs/swagger';

@Controller('account')
@ApiTags('account')
export class AccountController {
    constructor(
        private accountService: AccountService
    ) {}

    @Post()
    async create(@Body() account: CreateAccountDto) {
        let createdAccount = new AccountModel(account)

        return this.accountService.create(createdAccount);
    }

    @Get('balance/:account')
    async getBalance(@Param('account') accountNumber: number) {
        const balance = this.accountService.findOne(accountNumber)

        if (!balance) {
            throw new NotFoundException('Account number does not exist')
        }

        return { balance }
    }
}
