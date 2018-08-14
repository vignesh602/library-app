import { UserServiceService } from './../service/user-service/user-service.service';
import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-display-users',
  templateUrl: './display-users.component.html',
  styleUrls: ['./display-users.component.css']
})
export class DisplayUsersComponent implements OnInit {

  results =[];
  finalResults = [];
  searchTerm;
  delId;
  mdlSampleIsOpen : boolean = false;
  constructor(private userService: UserServiceService, private router: Router) { }

  ngOnInit() {
    this.results = JSON.parse(localStorage.getItem('users'));
    // console.log(this.results);
    
    
  }
  delete(){
    console.log(this.delId);
    // this.userService.deleteUser(id);
    // this.router.navigate(['/display-users']);
  }

  deleteModal(id){
    console.log(id);
    this.delId = id;
    
  }

  goBack(){
    this.router.navigate(['/add-user']);
  }

  // deleteModal(id){
  //   console.log('delete id--->',id);
  //   this.delId= id;
  //   // this.bookService.deleteBook(id);
  //   // this.router.navigate(['/display-books']);
  // }

  
private openModal(open : boolean,bookid) {
  console.log(bookid);
    this.mdlSampleIsOpen = open;
    
    this.delId = bookid;
}

deletefn(bookid) {
  // window.alert(bookid + 'deleted')
  this.userService.deleteUser(bookid);
    this.router.navigate(['/display-users']);
   this.mdlSampleIsOpen = false;
  console.log(bookid)
}

 
}
