import { Component, OnInit } from '@angular/core';
import {Product} from '../../models/Product';
import {PaymentService} from '../../services/http/payment/payment.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {

  products: Product[];
  name: string;
  email: string;
  total = 0;
  focus;
  focus1;

  constructor(
    private paymentService: PaymentService,
  ) {
    this.products = JSON.parse(localStorage.getItem('cart'));
    this.products.forEach(p => { this.total = this.total + (p.quantity * p.price); });
  }

  ngOnInit(): void {
  }

  save() {
    const body = {
      name: this.name,
      email: this.email,
      products: this.products
    };
    this.paymentService.register(body).subscribe(
      (response) => {
        alert('Pago exitoso');
        console.log(response);
        },
      (err) => {
        alert('Se presento un error');
        console.log(err);
      }
    );
  }


}
