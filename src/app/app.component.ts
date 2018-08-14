import { IssueServiceService } from './service/issue-service/issue-service.service';
import { Observable } from 'rxjs';
import { BookServiceService } from './service/book-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'app';

  result = [];  
  BooksCount$ ;
  issueCount$;
  available$;
  constructor(
    private bookService:BookServiceService,
    private issueService: IssueServiceService
  ){
  }
  
  ngOnInit() {
    
    this.bookService.books$.subscribe(books =>{   
     this.BooksCount$ = books.length > 0 ? books.length : 0;      
     console.log(books);
      
    });
    this.issueService.issuedBooks$.subscribe(data =>{
      this.issueCount$ = data.length > 0 ? data.length : 0;
      console.log(data);      
    });

    this.available$ = this.BooksCount$ - this.issueCount$;
  }
}
