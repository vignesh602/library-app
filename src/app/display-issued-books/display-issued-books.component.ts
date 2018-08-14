import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { IssueServiceService } from '../service/issue-service/issue-service.service';

@Component({
  selector: 'app-display-issued-books',
  templateUrl: './display-issued-books.component.html',
  styleUrls: ['./display-issued-books.component.css']
})
export class DisplayIssuedBooksComponent implements OnInit {

  issuedBooksData =[];
  searchTerm;
  constructor(
    private issueService: IssueServiceService,
    private router:Router
  ) { }

  ngOnInit() {
    this.issuedBooksData = this.issueService.getIssuedBooks();
    console.log(this.issuedBooksData);
    
  }

  returnBook(bookId){
    this.issueService.returnBook(bookId);
    this.issuedBooksData = this.issueService.getIssuedBooks();
    this.router.navigate(['/display-issued-book']);
  }

}
