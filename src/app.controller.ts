import {Body, Controller, Get, Param, Post} from '@nestjs/common';
import { AppService } from './app.service';
import {User} from "./entity/user";

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post("createUer")
  async creteUser(@Body() body: User): Promise<User> {
    return await this.appService.createUser(body)
  }

  @Get("getUsers")
  async getUsers(): Promise<User[]> {
    return await this.appService.getUsers();
  }

  @Get('getUser/:id')
  async getUserById(@Param('id') id: number) {
    return await this.appService.getUserById(id);
  }

  @Post('updateUser')
  async updateUser(@Body() body: User) {
    return await this.appService.updateUser(body);
  }



}
