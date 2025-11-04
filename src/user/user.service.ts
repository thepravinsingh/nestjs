import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User, userDocument } from './schemas/user.schema';
import { Model } from 'mongoose';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UserService {
  constructor(@InjectModel(User.name) private userModel: Model<userDocument>) {}

  async create(body) {
    const createUser = new this.userModel(body);
    const saveUser = await createUser.save();
    return {
      message: 'User SuccessFully Created',
      data: saveUser,
    };
  }

  async findUsers() {
    const allUsersData = this.userModel.find().exec();
    return {
      message: 'All User Fetch',
      data: await allUsersData,
    };
  }

  async findOneUser(id: string) {
    const oneUser = await this.userModel.findById(id);
    return {
      message: 'Single user fetch',
      data: await oneUser,
    };
  }

  async updateSingleUser(id: string, body: UpdateUserDto) {
    const singleUpdateUser = this.userModel.findByIdAndUpdate(id, body, {
      new: true,
    });
    return {
      message: 'User Updated SuccessFully',
      data: await singleUpdateUser,
    };
  }

  async deleteUser(id: string) {
    const deleteUserData = await this.userModel.findByIdAndDelete(id);
    return {
      message: 'User Deleted Successfully',
    };
  }
}
