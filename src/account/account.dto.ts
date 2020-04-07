import { IsNotEmpty, IsInt } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateAccountDto {
    @ApiProperty()
    @IsNotEmpty()
    @IsInt()
    account: number;
    
    @ApiProperty()
    @IsNotEmpty()
    @IsInt()
    owner: number;
    
    @ApiProperty()
    @IsNotEmpty()
    @IsInt()
    balance: number;
}