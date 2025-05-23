import { IsMobilePhone, IsOptional, IsString } from 'class-validator';

export class UpdateCatsDto {
  @IsString()
  @IsOptional()
  name: string;

  @IsString()
  @IsOptional()
  email: string;

  @IsMobilePhone()
  @IsOptional()
  mobile: string;
}
