import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class MlsSiteService {
  page: any;
  constructor(httpClient: HttpClient) {
    const me = this;
    httpClient.get('https://matchcenter.mlssoccer.com/schedule',
      { responseType: 'text'}
    )
      .subscribe(data => {
        console.dir(data);
           me.page = data; 
        });
  }

}
