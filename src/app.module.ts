import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppProvider } from './app.provider';
import { CountriesRepo } from './repo/countries.repo';
import { Mcountry } from './entity/mcountry';
@Module({
  imports: [
    TypeOrmModule.forFeature([Mcountry]),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '149199788Ww!',
      database: 'simple_schem',

      entities: [Mcountry],
      autoLoadEntities: true,
      synchronize: false,
    }),
  ],
  controllers: [AppController],
  providers: [AppService, AppProvider, CountriesRepo],
})
export class AppModule {}
