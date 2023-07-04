import { Component } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  cartItems: any[] = [];
  finalPrice: number = 0;

  constructor() { }

  ngOnInit() {
    this.cartItems = JSON.parse(sessionStorage.getItem('cartItems') || '[]');
    this.calculateFinalPrice();
  }

  updateQuantity(index: number, newQuantity: number): void {
    if (newQuantity > 0) {
      this.cartItems[index].quantity = newQuantity;
      sessionStorage.setItem('cartItems', JSON.stringify(this.cartItems));
      this.calculateFinalPrice();
    }
  }

  removeItem(index: number): void {
    this.cartItems.splice(index, 1);
    sessionStorage.setItem('cartItems', JSON.stringify(this.cartItems));
    this.calculateFinalPrice();
  }

  removeEverything(): void {
    this.cartItems = [];
    sessionStorage.removeItem('cartItems');
    this.calculateFinalPrice();
  }

  calculateFinalPrice(): void {
    this.finalPrice = this.cartItems.reduce((total, item) => total + (item.CENA * item.quantity), 0);
  }
}
