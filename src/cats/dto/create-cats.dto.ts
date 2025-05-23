import { IsEmail, IsMobilePhone, IsString } from 'class-validator';

export class CreateCatsDto {
  @IsString()
  name: string;

  @IsEmail()
  email: string;

  @IsMobilePhone()
  mobile: string;
}
