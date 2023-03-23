import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {TypeOrmModule} from "@nestjs/typeorm";
import {UserRepo} from "./repo/user.repo";
import {User} from "./entity/user";
import {TaskRepo} from "./repo/task.repo";
import {Task} from "./entity/task";
import {TaskController} from "./controller/task.controller";

@Module({
  imports: [

    TypeOrmModule.forFeature([User, Task]),
    TypeOrmModule.forRoot({

      type: 'mysql',
      host: 'localhost',
      port: 3307,
      username: 'root',
      password: 'password',
      database: 'mydb',

      entities: [User, Task],
      autoLoadEntities: true,
      synchronize: true,

    }),

  ],
  controllers: [AppController, TaskController],
  providers: [AppService, UserRepo, TaskRepo],
})
export class AppModule {}
