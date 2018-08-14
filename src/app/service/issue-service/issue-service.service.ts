import { Subject, BehaviorSubject } from 'rxjs';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class IssueServiceService {

  issuedBooks =[];
  dummyIssue=[];
  newBook;
  issuedBooks$ = new BehaviorSubject<any>(null);
  constructor(
    private router: Router
  ) { 
      this.issuedBooks = JSON.parse(window.localStorage.getItem('issue'));
      this.issuedBooks$.next(this.issuedBooks);
  }

  issueBook(form){
    if(window.localStorage.getItem('issue') !== null && window.localStorage.getItem('issue')!== undefined){
      this.newBook = JSON.parse(window.localStorage.getItem('issue'));
      this.newBook.push(form.value);
      this.issuedBooks = this.newBook;
      this.dummyIssue.push(form.value)
      window.localStorage.setItem('issue',JSON.stringify(this.issuedBooks));
      this.issuedBooks$.next(this.issuedBooks);
    }
    else{
      this.issuedBooks.push(form.value);
    }
    
   }
   getIssuedBooks(){
     let issuedBooksFromLocalStorage = JSON.parse(window.localStorage.getItem('issue'));
     return issuedBooksFromLocalStorage;
   }

   returnBook(bookId){
    if(confirm('Do you want to delete the Book')){
      let removeIndex = this.issuedBooks.map((item)=>{ 
        return item.bookId;
      }).indexOf(bookId);
      this.issuedBooks.splice(removeIndex,1);
      window.localStorage.setItem('issue', JSON.stringify(this.issuedBooks));
      this.issuedBooks$.next(this.issuedBooks);
    }
   }

   checkForAvailableQuantity(bookId,quantity){
      console.log('quanity-->',quantity);
      console.log('bookId-->',bookId);
      
      let booksids = [];
      let booksFromLocalStorage=[];
      let issuedBookFromLocalStorage = JSON.parse(window.localStorage.getItem('issue'));
      booksFromLocalStorage = JSON.parse(window.localStorage.getItem('books'));
      issuedBookFromLocalStorage.forEach(s=>{
      if(s.BookId===bookId){
        booksids.push(s);
        console.log(booksids);        
      }
    });
    let issuedQuantity = booksids.length;
    console.log('issued quantity-->',issuedQuantity);
    
    let particularBookFromList = booksFromLocalStorage.find((s:any)=> s.bookId==bookId);
    console.log('book from books list',particularBookFromList);
    let totalQuanity = particularBookFromList.quantity;
    if(totalQuanity > issuedQuantity){
      return "available";
    }
    else 
    return "unavailable";
     
   }

   bookReturn(id){
    let removeIndex = this.issuedBooks.map((item)=>{ 
      return item.recordId;
    }).indexOf(id);
    console.log(this.issuedBooks);
    this.issuedBooks.splice(removeIndex,1);
    console.log('after-->',this.issuedBooks);
    window.localStorage.setItem('issue', JSON.stringify(this.issuedBooks));
    this.router.navigate(['/display-issued-book']);
    this.issuedBooks$.next(this.issuedBooks);
   }
}
