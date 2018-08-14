import { Book } from './../model/book.model';
import { Injectable } from '@angular/core';
import { Observable, of, observable, Subject, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookServiceService {

  books = [];
  newBook: any;
  BookDataById: any;
  issuedBookId;
  books$ = new BehaviorSubject<any>(null);

  constructor() {
    this.books = JSON.parse(localStorage.getItem('books'));
    this.books$.next(this.books);
   }
  
  saveBook(bookForm){
    console.log(bookForm);
    if(window.localStorage.getItem('books') !== null && window.localStorage.getItem('books')!== undefined){
      this.newBook = JSON.parse(window.localStorage.getItem('books'));
      this.newBook.push(bookForm);
      this.books = this.newBook;
      window.localStorage.setItem('books',JSON.stringify(this.books));
      this.books$.next(this.books);
    }
    else{
      this.books.push(bookForm.value);
    }
    
  }

  getBooks(): Observable<any>{
    // this.books = JSON.parse(localStorage.getItem('books'));
    // return this.books;
    // this.books = JSON.parse(localStorage.getItem('books'));
    // this.books$.next(this.books);
    return this.books$
   
  }

 updateBooks(bookForm){

  console.log(this.books);
  let bookIdFromData = bookForm.value.bookId;
  let getRequiredBookData = this.books.find((s:any)=> s.bookId==bookIdFromData);
  let removeIndex = this.books.map((item)=>{ 
    return item.bookId;
  }).indexOf(bookIdFromData);
  console.log('before splice-->',this.books);
  this.books.splice(removeIndex,1);
  console.log('before splice-->',this.books);
  this.books.push(bookForm.value);
  console.log('afterpush-->',this.books);
  window.localStorage.setItem('books', JSON.stringify(this.books));
 }

 deleteBook(id){
  // if(confirm('Do you want to delete the Book')){
    let removeIndex = this.books.map((item)=>{ 
      return item.bookId;
    }).indexOf(id);
    this.books.splice(removeIndex,1);
    window.localStorage.setItem('books', JSON.stringify(this.books));
    this.books$.next(this.books)
  // }
 }

 getBookById(id){
  return this.books.find((s:any)=> s.bookId==id);
  
 }
 
 storeBook(form){
   let issuedBook = form.value;
   this.issuedBookId = issuedBook.BookId
   
   

 }

 
}
