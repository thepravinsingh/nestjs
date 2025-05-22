import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CatsService } from './cats.service';
import { CreateCatsDto } from './dto/create-cats.dto';

@Controller('cats')
export class CatsController {
  constructor(private catsService: CatsService) {}

  @Get()
  findAll() {
    return this.catsService.findAllCats();
  }

  @Get(':id')
  findOneCat(@Param('id') id: string) {
    return this.catsService.findOneCat(+id);
  }

  @Post()
  createNewCat(@Body() data: CreateCatsDto) {
    return this.catsService.createNewCat(data);
  }
}