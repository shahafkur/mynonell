import { Injectable } from '@nestjs/common';
import {User} from "./entity/user";
import {UserRepo} from "./repo/user.repo";

@Injectable()
export class AppService {

  constructor(private readonly userRepo: UserRepo) {

  }

  getHello(): string {
    return 'Hello World!';
  }

  async getUsers(): Promise<User[]> {
    return await this.userRepo.getUsers();
  }

  async updateUser(user: User): Promise<User> {
    return await this.userRepo.updateUser(user);
  }

  async createUser(user: User): Promise<User> {
    return await this.userRepo.createUser(user);
  }

  async getUserById(id: number): Promise<User> {
    return await this.userRepo.getUserById(id);
  }
}
