import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Cat, CatDocument } from './schemas/cat.schema';
import { Model } from 'mongoose';
import { CreateCatDto } from './dto/create-cat.dto';

@Injectable()
export class CatService {
  constructor(@InjectModel(Cat.name) private catModel: Model<CatDocument>) {}

  async create(body: CreateCatDto) {
    const allCatsData =  new this.catModel(body);
    return allCatsData.save();
  }

  async findCat() {  
    return this.catModel.find().exec();
  }

  async findOneCat(id: string) { 
    const oneCatData = await this.catModel.findById(id);
    return oneCatData;
  }

  async updateCat(id: string, body: CreateCatDto) {
    const updateCat = await this.catModel.findByIdAndUpdate(id, body, {
      new: true,
    });
    return updateCat;
  }

  async removeCat(id: string) {
    const removeOneCat = await this.catModel.findByIdAndDelete(id);
    return {
      mess: 'Delete or Remove',
      data: removeOneCat,
    };
  }
}