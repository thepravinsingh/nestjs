import { IsOptional, IsString } from 'class-validator';

export class UpdateCatDto {
  @IsString()
  @IsOptional()
  name: string;

  @IsString()
  @IsOptional()
  email: string;

  @IsString()
  @IsOptional()
  mobile: string;
}
