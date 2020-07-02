import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {tap} from 'rxjs/internal/operators/tap';
import {EnvService} from '../env/env.service';
import {Product} from '../../models/Product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(
    private http: HttpClient,
    private env: EnvService,
  ) { }

  get() {
    return this.http.get<Product[]>(this.env.API_URL + 'product')
      .pipe(
        tap(products => products)
      );
  }

}
