import { IsString } from 'class-validator';

export class CreateCatDto {
  @IsString()
  name: string;

  @IsString()
  email: string;

  @IsString()
  mobile: string;
}
