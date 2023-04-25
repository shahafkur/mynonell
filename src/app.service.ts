import { Injectable } from '@nestjs/common';
import axios from 'axios';
import { AppMyJason } from './app,myJason';
import { CountriesRepo } from './repo/countries.repo';
import { Mcountry } from './entity/mcountry';


@Injectable()
export class AppService {
  constructor(private contryRepo: CountriesRepo) {
  }
  async insertToDB() {

    const options = {
      method: 'GET',
      url: 'http://api.nobelprize.org/v1/country.json',
      headers: { accept: 'application/json' },
    };
    const res = await axios.request(options);
    const myData: AppMyJason = JSON.parse(JSON.stringify(res.data))
    for (let i = 0; i < myData.countries.length; i++) {
      await this.updateContry(myData.countries[i]);
    }

  }
  async updateContry(mcountry: Mcountry): Promise<void> {
    return await this.contryRepo.updatData(mcountry);
  }

  async getAllcontries(booleshouldDownloadLatest: boolean) {

    if(await this.contryRepo.isTableEmpty()==true || booleshouldDownloadLatest==true){
      await this.insertToDB();
    }
    return await this.contryRepo.getData();
  }
}
