import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  createUser(@Body() body: CreateUserDto) {
    return this.userService.create(body);
  }

  @Get()
  getAllUser() {
    return this.userService.findUsers();
  }

  @Get(':id')
  getSingleUser(@Param('id') id: string) {
    return this.userService.findOneUser(id);
  }

  @Put(':id')
  updateSingleUser(
    @Param('id') id: string,
    @Body() updatedUserData: UpdateUserDto,
  ) {
    return this.userService.updateSingleUser(id, updatedUserData);
  }

  @Delete(':id')
  deleteSingleUser(@Param('id') id: string) {
    return this.userService.deleteUser(id);
  }
}
