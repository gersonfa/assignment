import { IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateTransactionDto {
    @ApiProperty()
    @IsNotEmpty()
    fromAccount: number;
    @ApiProperty()
    @IsNotEmpty()
    toAccount: number;
    @ApiProperty()
    @IsNotEmpty()
    amount: number;
}