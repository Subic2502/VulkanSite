import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-zanr',
  templateUrl: './zanr.component.html',
  styleUrls: ['./zanr.component.css']
})
export class ZanrComponent implements OnInit {
  zanr: string | null = null;
  books: any[] = [];

  constructor(private route: ActivatedRoute, private http: HttpClient) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.zanr = params['ZANR'];
      if (this.zanr) {
        this.fetchBooks(this.zanr);
      }
    });
  }

  fetchBooks(zanr: string): void {
    console.log(`${this.zanr}`);
    this.http.get<any[]>(`http://localhost/VulkanBackend/db.php?action=get-books-by-zanr&ZANR=${this.zanr}`)
      .subscribe(
        response => {
          this.books = response;
        },
        error => {
          console.log('Error fetching books:', error);
        }
      );
  }
}
