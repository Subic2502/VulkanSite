import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SlideshowBannerComponent } from './slideshow-banner/slideshow-banner.component';
import { BookListComponent } from './book-list/book-list.component';
import { BookCardComponent } from './book-card/book-card.component';
import { HomeComponent } from './home/home.component';
import { BookComponent } from './book/book.component';
import { ZanrComponent } from './zanr/zanr.component';
import { CartComponent } from './cart/cart.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';

const appRoute: Routes = [
  { path: '', component: HomeComponent },
  { path: 'Home', component: HomeComponent },
  { path: 'Book', component: BookComponent },
  { path: 'Zanr', component: ZanrComponent },
  { path: 'Cart', component: CartComponent },
  { path: 'Cekaut', component: CheckoutComponent },
]

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SlideshowBannerComponent,
    BookListComponent,
    BookCardComponent,
    HomeComponent,
    BookComponent,
    ZanrComponent,
    CartComponent,
    CheckoutComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CarouselModule.forRoot(),
    HttpClientModule,
    RouterModule.forRoot(appRoute),
    CommonModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
