import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { UserServiceService } from './../service/user-service/user-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

  userId = Date.now();
  constructor(private userService: UserServiceService, private router: Router) { }

  ngOnInit() {
  }

  submit(userForm){
    console.log(userForm.value);
    
    this.userService.saveUser(userForm);
    this.router.navigate(['/display-users']);
    console.log('navigated');
    
  }

  goBack(){
    this.router.navigate['/display-users'];
  }

}
