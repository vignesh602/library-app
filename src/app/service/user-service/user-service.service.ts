import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  users = [];
  newUser: any;
  constructor() {
    this.users = JSON.parse(localStorage.getItem('users'));
   }

  saveUser(userForm){
    if(window.localStorage.getItem('users') !== null && window.localStorage.getItem('users')!== undefined){
      this.newUser = JSON.parse(window.localStorage.getItem('users'));
      this.newUser.push(userForm.value);
      this.users = this.newUser;
      console.log(this.users);
      window.localStorage.setItem('users',JSON.stringify(this.users));
      
    }
    else{
      this.users.push(userForm.value);
    }
  }

  getUsers(){
    return JSON.parse(localStorage.getItem('users'));
  }

  updateUser(userForm){
    console.log(this.users);
    let userIdFromData = this.users.find((s:any)=> s.userId==userIdFromData);
    let removeIndex = this.users.map((item)=>{
      return item.userId;
    }).indexOf(userIdFromData);
    console.log('before splice',this.users);
    this.users.splice(removeIndex,1);
    console.log('after splice',this.users);
    this.users.push(userForm.value);
    console.log('after pushing',this.users);
    window.localStorage.setItem('users', JSON.stringify(this.users));
    
    
  }

  deleteUser(id){
    // if(confirm('Do you want to delete the User')){
      let removeIndex = this.users.map((item)=>{ 
        return item.userId;
      }).indexOf(id);
      this.users.splice(removeIndex,1);
      window.localStorage.setItem('users', JSON.stringify(this.users));
    }
  // }
}
