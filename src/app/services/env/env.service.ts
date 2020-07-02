import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EnvService {

  BASE_URL = 'http://192.168.1.3/daxcsa-api/public/';
  API_URL = this.BASE_URL + 'api/v1/';

  constructor() { }
}
