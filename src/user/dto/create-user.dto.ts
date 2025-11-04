import { IsEmail, IsNumber, IsString, isString } from 'class-validator';

export class CreateUserDto {
  @IsString()
  name: string;

  @IsEmail()
  email: string;

  @IsNumber()
  number: string;
}
