import { Controller, Get, Param } from "@nestjs/common";

import { AppProvider } from "./app.provider";

@Controller()
export class AppController {
  constructor(private readonly appProvider: AppProvider) {}

  @Get(':shouldDownloadLatest')
  async getHello(@Param('shouldDownloadLatest') shouldDownloadLatest: string) {
    const booleshouldDownloadLatest: boolean = JSON.parse(
      shouldDownloadLatest.toLowerCase(),
    );
    if (booleshouldDownloadLatest){
      //return await this.appProvider.getCountries();
      return await this.appProvider.getCountries();
    }
    else{
      return booleshouldDownloadLatest;
    }
  }

}