import { Injectable } from '@angular/core';
import {Product} from '../../../models/Product';
import {tap} from 'rxjs/operators';
import {HttpClient} from '@angular/common/http';
import {EnvService} from '../../env/env.service';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  constructor(
    private http: HttpClient,
    private env: EnvService,
  ) { }

  register(body) {
    return this.http.post(this.env.API_URL + 'payment', body)
      .pipe(
        tap(products => products)
      );
  }

}
