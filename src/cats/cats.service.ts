import { Body, Injectable } from '@nestjs/common';
import { CreateCatsDto } from './dto/create-cats.dto';

@Injectable()
export class CatsService {
  private cats: (CreateCatsDto & { id: number })[] = [];

  findAllCats() {
    return this.cats;
  }

  findOneCat(id: number) {
    const oneCat = this.cats.find((cat) => cat.id === id);
    return oneCat;
  }

  createNewCat(@Body() data: CreateCatsDto) {
    const newCat = {
      id: this.cats.length + 1,
      name: data.name,
      email: data.email,
    };
    this.cats.push(newCat);
    return newCat;
  }
}
