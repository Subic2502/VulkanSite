import { Component, OnInit,Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {
  isbn: string | null = null;
  book: any | null=null;

  constructor(private route: ActivatedRoute, private http: HttpClient) { }
  

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.isbn = params['ISBN'];
      if (this.isbn) {
        this.fetchBook(this.isbn);
      }
    });
  }

  fetchBook(isbn:string):void {
    console.log(`${this.isbn}`);
    this.http.get<any>(`http://localhost/VulkanBackend/db.php?action=get-book-by-isbn&ISBN=${this.isbn}`)
      .subscribe(
        response => {
          this.book = response;
        },
        error => {
          console.log('Error fetching books:', error);
        }
      );
  }

  addToCart(): void {
    let cartItems: any[] = JSON.parse(sessionStorage.getItem('cartItems') || '[]');

    const existingCartItemIndex = cartItems.findIndex(item => item.ISBN === this.book.ISBN);
    if (existingCartItemIndex > -1) {
      
      cartItems[existingCartItemIndex].quantity += 1;
    } else {
      
      const cartItem = {
        ISBN: this.book.ISBN,
        NAZIV: this.book.NAZIV,
        AUTOR: this.book.AUTOR,
        ZANR: this.book.ZANR,
        CENA: this.book.CENA,
        BROJPRODATIH: this.book.BROJPRODATIH,
        quantity: 1
      };
      cartItems.push(cartItem);
      console.log(`[TEST]Naslov:${cartItem.NAZIV}`);
    }

    sessionStorage.setItem('cartItems', JSON.stringify(cartItems));
  }


  printCartData(): void {
    const cartItems = JSON.parse(sessionStorage.getItem('cartItems') || '[]');

    for (const item of cartItems) {
      console.log(`${item.key}: ${item.value}`);
    }
  }



}
