import { UserServiceService } from './../service/user-service/user-service.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {

  users = [];
  id: any;
  singleUser: any;
  constructor(private route: ActivatedRoute, 
    private userService:UserServiceService,
    private router: Router) {

    this.users = JSON.parse(localStorage.getItem('users'));
    this.id = this.route.snapshot.paramMap.get('id');
    console.log('id-->',this.id);
    if(this.id) {
      this.getUserById(this.id);
   }
  }
  ngOnInit() {
  }
  getUserById(id){
    this.singleUser = this.users.find((s:any)=> s.userId==id );
    console.log(this.users.find((s:any)=> s.userId==id ));
          
  }

  submit(BookForm){
    this.userService.updateUser(BookForm);
    this.router.navigate(['/display-users']);
  }

}
