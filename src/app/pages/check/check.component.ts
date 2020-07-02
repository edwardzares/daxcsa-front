import { Component, OnInit } from '@angular/core';
import {Product} from '../../models/Product';
import {Router} from '@angular/router';

@Component({
  selector: 'app-check',
  templateUrl: './check.component.html',
  styleUrls: ['./check.component.css']
})
export class CheckComponent implements OnInit {

  products: Product[] = [];
  total = 0;

  constructor(
    private router: Router,
  ) {
    this.products = JSON.parse(localStorage.getItem('cart'));
    this.products.forEach(p => { this.total = this.total + (p.quantity * p.price) });
  }

  ngOnInit(): void {
  }

  removeItem(product: Product) {
    this.products = this.products.filter(el => el.id !== product.id);
    localStorage.setItem('cart', JSON.stringify(this.products));
  }

  click_plus(name, max = 0) {
    this.products.forEach(product => {
      if (product.id === name) {
        if (product.quantity === max) {
          // alert llego al maximo
        } else {
          product.quantity = product.quantity + 1;
          this.total = this.total + product.price;
        }
      }
    });
  }

  click_minus(name) {
    this.products.forEach(product => {
      if (product.id === name && product.quantity > 0) {
        product.quantity = product.quantity - 1;
        this.total = this.total - product.price;
      }
    });
  }

  goToPay() {
    localStorage.setItem('cart', JSON.stringify(this.products));
    this.router.navigate(['/', 'payment']);
  }

}
