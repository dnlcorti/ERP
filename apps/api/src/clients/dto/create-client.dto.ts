import { IsString, IsEmail } from 'class-validator';

export class CreateClientDto {
  @IsString()
  firstName: string;

  @IsString()
  lastName: string;

  @IsString()
  taxCode: string;

  @IsString()
  phone: string;

  @IsEmail()
  email: string;
}
