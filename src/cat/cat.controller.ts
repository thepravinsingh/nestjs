import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { CatService } from './cat.service';
import { CreateCatDto } from './dto/create-cat.dto';
import { UpdateCatDto } from './dto/update-cat.dto';

@Controller('cat')
export class CatController {
  constructor(private readonly catService: CatService) {}

  @Post()
  createCat(@Body() body: CreateCatDto) { 
    return this.catService.create(body);
  }

  @Get()
  findAllCat() {
    return this.catService.findCat();
  }

  @Get(':id')
  findOneCat(@Param('id') id: string) {
    return this.catService.findOneCat(id);
  }

  @Put(':id')
  updateCat(@Param('id') id: string, @Body() updataData: UpdateCatDto) {
    return this.catService.updateCat(id, updataData);
  }

  @Delete(':id')
  deleteCat(@Param('id') id: string) {
    return this.catService.removeCat(id);
  }
}
