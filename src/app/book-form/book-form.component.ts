import { FormsModule } from '@angular/forms';
import { BookServiceService } from './../service/book-service.service';
import { Component, OnInit,ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { getOrCreateChangeDetectorRef } from '@angular/core/src/render3/di';

@Component({
  selector: 'app-book-form',
  templateUrl: './book-form.component.html',
  styleUrls: ['./book-form.component.css']
})
export class BookFormComponent implements OnInit {
  @ViewChild('bookForm') form;
  toggle:boolean = false;
  bid = Date.now();
  id;
  bookId = 20;
  books =[];
  booksFromLocalStorage = [];
  singleBook;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private bookService: BookServiceService
  ){
    this.books = JSON.parse(localStorage.getItem('dummyIssue'));
    this.id = this.route.snapshot.paramMap.get('id');
    console.log('id-->',this.id);
    console.log(this.books);
    

  }

    

  ngOnInit(){
    if(this.id){
    console.log(this.id);  
    this.booksFromLocalStorage = JSON.parse(localStorage.getItem('books'));
    console.log(this.booksFromLocalStorage);    
      this.getBookById(this.id);
    this.toggle = true;
    }
  }

  save(bookForm) {
    let formValue = this.form['form'].value
    console.log(formValue);
    // console.log(bookForm['value']);
    this.bookService.saveBook(formValue);
    this.router.navigate(['/display-books']);
  }

  editForm(form){
    this.bookService.updateBooks(form);
    this.router.navigate(['/display-books']);
  }
  
  getBookById(id){
    console.log(id);    
    this.singleBook = this.booksFromLocalStorage.find((s:any)=>s.bookId==id);
    console.log(this.singleBook);
    
  }

}