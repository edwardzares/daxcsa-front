import { Component, OnInit } from '@angular/core';
import {ProductService} from '../../services/http/product.service';
import {Product} from '../../models/Product';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  products: Product[];

  constructor(
    private http: ProductService,
  ) {

    this.http.get().subscribe((products) => {
      this.products = products;
    });

  }

  ngOnInit() {
  }

  addProductToCart(product: Product) {
    let mycart = JSON.parse(localStorage.getItem('cart'));
    if (mycart === null || mycart.length === 0) {
      mycart = Array();
    }
    const x = mycart.find( el => el.id === product.id);
    if (typeof x === 'undefined') {
      product.quantity = 1;
    } else {
      product.quantity = x.quantity + 1;
      mycart = mycart.filter( p => p.id !== x.id );
    }
    mycart.push(product);
    localStorage.setItem('cart', JSON.stringify(mycart));
  }

}
