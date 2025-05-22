import { IsEmail, IsString } from 'class-validator';

export class CreateCatsDto {
  @IsString()
  name: string;

  @IsEmail()
  email: string;
}