import { PartialType } from '@nestjs/mapped-types';
import { CreateCatDto } from 'src/cat/dto/create-cat.dto';

export class UpdateUserDto extends PartialType(CreateCatDto) {}
