import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { BookServiceService } from './../service/book-service.service';
import { Component, OnInit, Input, ViewChild } from '@angular/core';

@Component({
  selector: 'app-display-books',
  templateUrl: './display-books.component.html',
  styleUrls: ['./display-books.component.css']
})
export class DisplayBooksComponent implements OnInit {

 result= [];
 issuedBooks= [];
 delId;

 count;
 searchTerm;
 bookId;
 similarBook = [];
 mdlSampleIsOpen : boolean = false;
  constructor(private bookService: BookServiceService, 
              private router: Router,
              private location: Location,
            ) { 
  }

  ngOnInit() {
    // this.result = this.bookService.getBooks();
    this.bookService.books$.subscribe(data=>{
      this.result = data;
    });
    // console.log(this.result);
    
    this.issuedBooks = JSON.parse(window.localStorage.getItem('issue'));
    console.log('issued books-->',this.issuedBooks);
    console.log(this.bookId);
    
    // this.checkForIssue(1533723477117 );
    // this.count = this.checkForIssue(1533723477117);
  }

  // deleteModal(id){
  //   console.log('delete id--->',id);
  //   this.delId= id;
  //   // $('exampleModal').on('show.bs.modal', delete(){

  //   // });
  //   // if(this.delId){
  //   //   this.delete();
  //   // }
  //   // this.bookService.deleteBook(id);
  //   // this.router.navigate(['/display-books']);
  // }

  delete(id){
    console.log('delete method-->', id);
    this.bookService.deleteBook(id);
     this.router.navigate(['/display-books']);
  }

  goBack(){
    this.router.navigate(['/book-form']);
  }

  checkForIssue(bookId){
    console.log(bookId);    
    // this.similarBook = [];
    // this.issuedBooks.forEach(s =>{
    //   if(s.BookId=== bookId){
    //     this.similarBook.push(s);
    //     console.log(this.similarBook);
        
    //   }
    // })
    let booksids = [];
    let issuedBookFromLocalStorage = JSON.parse(window.localStorage.getItem('issue'))
    issuedBookFromLocalStorage.forEach(s=>{
      if(s.BookId===bookId){
        booksids.push(s);
        console.log(booksids);        
      }
    });
    return booksids.length;
    // this.count = similarBook.length-1;  
    // console.log('count-->',this.similarBook.length, this.similarBook.bookSelected);
     
    // return this.similarBook.length;
  }

  // openModal(id){
  //   this.bookId = id;
  //   console.log(this.bookId);
  //   // $('#exampleModal').m
  // }

  private openModal(open : boolean,bookid) {
    console.log(bookid);
      this.mdlSampleIsOpen = open;
      
      this.delId = bookid;
  }
  
  deletefn(bookid) {
    // window.alert(bookid + 'deleted')
    // this.userService.deleteUser(bookid);
    this.bookService.deleteBook(bookid);
      this.router.navigate(['/display-books']);
     this.mdlSampleIsOpen = false;
    console.log(bookid)
  }
  
  

}
