import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
 
  getBooksFromLocalStorage = [];
  getIssuedBooksFromLocalStorage = [];
  booksCount;
  issuedBooksCount;
  constructor() { 
  }

  ngOnInit() {
    this.getBooksFromLocalStorage = JSON.parse(window.localStorage.getItem('books'));
    this.getIssuedBooksFromLocalStorage = JSON.parse(window.localStorage.getItem('issue'));
    this.booksCount = this.getBooksFromLocalStorage.length;
    this.issuedBooksCount = this.getIssuedBooksFromLocalStorage.length;
  }

}
