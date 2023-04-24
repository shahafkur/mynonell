import { Injectable } from '@nestjs/common';
import axios from 'axios';
import { AppMyJason } from './app,myJason';
import { CountriesRepo } from './repo/countries.repo';
import { Mcountry } from './entity/mcountry';

@Injectable()
export class AppService {
  constructor(private contryRepo: CountriesRepo) {
  }
  async getCountries() {

    const options = {
      method: 'GET',
      url: 'http://api.nobelprize.org/v1/country.json',
      headers: { accept: 'application/json' },
    };

    // @ts-ignore
    const res = await axios.request(options);
    const myData: AppMyJason = JSON.parse(JSON.stringify(res.data))

    const listcontriestoret: string[] = [];
    for (let i = 0; i < myData.countries.length; i++) {
      listcontriestoret.push(myData.countries[i].name);
      this.updateContry(myData.countries[i]);
    }


    return listcontriestoret;

  }
  async updateContry(mcountry: Mcountry): Promise<void> {
    return await this.contryRepo.updatData(mcountry);
  }
}

