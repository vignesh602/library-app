import { Location } from '@angular/common';
import { BookServiceService } from './../service/book-service.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.css']
})
export class BookDetailComponent implements OnInit {

  books = [];
  id: any;
  singleBook: any;
  constructor(private route: ActivatedRoute, 
    private bookService:BookServiceService,
    private router: Router,
    private location: Location
  ) { 
    this.books = JSON.parse(localStorage.getItem('books'));
    this.id = this.route.snapshot.paramMap.get('id');
    console.log('id-->',this.id);
    
    if(this.id) {
      this.getBookById(this.id);

    }
  }

  ngOnInit() {
    
  }

  getBookById(id){
    this.singleBook = this.books.find((s:any)=> s.bookId==id );
    console.log(this.books.find((s:any)=> s.bookId==id ));
          
  }

  submit(BookForm){
    this.bookService.updateBooks(BookForm);
    this.router.navigate(['/display-books']);
  }

  goBack(){
    this.router.navigate(['/display-books']);
  }


}
