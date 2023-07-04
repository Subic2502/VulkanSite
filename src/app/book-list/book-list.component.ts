import { Component ,OnInit,Input} from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {
  @Input() message:string="";
  @Input() tip: string = "";

  books: any[]=[];

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.fetchBooks();
  }

  fetchBooks() {
    console.log(`${this.tip}`);
    if(this.tip==="TOPLISTA"){
      console.log("Uso u toplistu");
      this.http.get<any>(`http://localhost/VulkanBackend/db.php?action=get-toplista`)
        .subscribe(
          response => {
            this.books = response;
          },
          error => {
            console.log('Error fetching books:', error);
          }
        );
    }else{
      console.log("Uso u zanrove");
      this.http.get<any>(`http://localhost/VulkanBackend/db.php?action=get-books-genre&genre=${this.tip}`)
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
}
