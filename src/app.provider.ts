import { Injectable } from '@nestjs/common';
import { AppService } from './app.service';

@Injectable()
export class AppProvider {
    constructor(private readonly service: AppService) {
    }

    async getCountries() {
        return await this.service.getCountries();
    }
}