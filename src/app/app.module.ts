import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import { HomeComponent } from './pages/home/home.component';
import {AppRoutingModule} from './app.routing';
import {RouterModule} from '@angular/router';
import {NavbarComponent} from './shared/navbar/navbar.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { CheckComponent } from './pages/check/check.component';
import {FormsModule} from '@angular/forms';
import { PaymentComponent } from './pages/payment/payment.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    CheckComponent,
    PaymentComponent,
  ],
  imports: [
    BrowserModule,
    NgbModule,
    HttpClientModule,
    RouterModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
