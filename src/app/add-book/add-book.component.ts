import { Location } from '@angular/common';
import { BookServiceService } from './../service/book-service.service';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html', 
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent implements OnInit {

  bid= Date.now();
  success: String;
  bookDataById: any;
  booksFromLocalStorage = [];
  
  constructor(private bookService: BookServiceService,
    private router: Router,
    private route: ActivatedRoute,
    private modalService: NgbModal
  ) { 
  this.booksFromLocalStorage=JSON.parse(window.localStorage.getItem('books'));
  }
  ngOnInit() {
    // let id = this.route.snapshot.paramMap.get('id');
    // console.log('id-->',id);
    // console.log(this.booksFromLocalStorage);   
    // this.booksFromLocalStorage.find((s:any)=> s.bookId===id);
    // console.log(this.booksFromLocalStorage.find((s:any)=> s.bookId===id));
    
    // this.bookDataById =this.bookService.getBookById(id);
    // console.log(this.bookDataById);
    
    
  }

  submit(form){
    // console.log(form);
    console.log(form.value);
    this.bookService.saveBook(form);
    this.router.navigate(['/display-books']);

  }

  goBack(){
    this.router.navigate(['/display-books']);
  }

  }




