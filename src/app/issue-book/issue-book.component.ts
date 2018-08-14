import { Router } from '@angular/router';
import { BookServiceService } from './../service/book-service.service';
import { Component, OnInit } from '@angular/core';
import { getLocaleDateFormat, DatePipe, getLocaleDateTimeFormat } from '@angular/common';
import { IssueServiceService } from '../service/issue-service/issue-service.service';

@Component({
  selector: 'app-issue-book',
  templateUrl: './issue-book.component.html',
  styleUrls: ['./issue-book.component.css']
})
export class IssueBookComponent implements OnInit {

  getBooksFromLocalStorage = [];
  getUsersFromLocalStorage =[];
  getBookById: any;
  toggle: boolean = false;
  toggleUser: boolean = false;
  date;
  selectedBookName;
  selectedBookId;
  selectedBookAuthor;
  selectedUserName;
  selectedUserId;
  dueDate;
  rid = Date.now();
  availableToggle;
  mainToggle = false;

  constructor(
    private bookService: BookServiceService, 
    private router: Router,
    private issueService: IssueServiceService
  ) { this.checkBookWithIssuedBooks(); }

  ngOnInit() {
      this.getBooksFromLocalStorage = JSON.parse(localStorage.getItem('books'));
      this.getUsersFromLocalStorage = JSON.parse(localStorage.getItem('users'));
      console.log(this.getBooksFromLocalStorage.length);
      
      // console.log(this.getBooksFromLocalStorage);
      this.currentDate();

      let someDate = new Date();
      let dd = someDate.getDate()+15;
      let mm = someDate.getMonth()+1;
      let yy = someDate.getFullYear();
    this.dueDate = mm+'/'+dd+'/'+yy;
      
  }

  checkBookWithIssuedBooks(){
    let booksfromstorage = [];
    booksfromstorage = JSON.parse(localStorage.getItem('books'));
    booksfromstorage.forEach(element => {
      console.log(element.bookId);
      
    });
  }

  sendBookId(id){
    console.log('before',this.toggle);
    this.toggle = true;
      this.getBookById = this.bookService.getBookById(id);
      console.log(this.getBookById);
      console.log('after',this.toggle);
  }
  
  onSelectedBook(option) {
    this.toggle = true;
    let selectedBookObject = option;
    this.selectedBookName = selectedBookObject.bookName;
    this.selectedBookId = selectedBookObject.bookId;
    this.selectedBookAuthor = selectedBookObject.author;
    let bookQuantity = selectedBookObject.quantity;

    let check = this.issueService.checkForAvailableQuantity(this.selectedBookId,bookQuantity);
    console.log('check-->',check);
    this.mainToggle = true;
    if(check==="available"){
      this.availableToggle = true;
    }
    else{
      this.availableToggle = false;
    }
    
    console.log(this.selectedBookId);
    
    
  }
  onSelectedUser(option){
    this.toggleUser = true;
    let selectedUserObject = option;
    this.selectedUserName = selectedUserObject.userName;
    this.selectedUserId = selectedUserObject.userId;
    console.log(this.selectedUserName);
    
  }

  currentDate(){
    let changedDate = new Date();
    let dd = changedDate.getDate();
    let mm = changedDate.getMonth()+1;
    let yy = changedDate.getFullYear();
    this.date = mm+'/'+dd+'/'+yy;
    
  }

  submit(form){
    this.issueService.issueBook(form);
    // this.bookService.storeBook(form);
    this.router.navigate(['/display-issued-book']);
    console.log('navigated');
  }
 
}
