import { IsNumber, IsString, IsOptional } from 'class-validator';

export class CreatePaymentDto {
  @IsNumber()
  clientId: number;

  @IsNumber()
  productId: number;

  @IsNumber()
  amount: number;

  @IsString()
  payDate: string;

  @IsOptional()
  @IsString()
  note?: string;
}
