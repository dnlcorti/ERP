import { IsNumber, IsString, IsOptional } from 'class-validator';

export class UpdatePaymentDto {
  @IsOptional()
  @IsNumber()
  clientId?: number;

  @IsOptional()
  @IsNumber()
  productId?: number;

  @IsOptional()
  @IsNumber()
  amount?: number;

  @IsOptional()
  @IsString()
  payDate?: string;

  @IsOptional()
  @IsString()
  note?: string;
}
