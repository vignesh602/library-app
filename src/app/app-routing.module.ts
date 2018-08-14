import { BookFormComponent } from './book-form/book-form.component';
import { BookDetailComponent } from './book-detail/book-detail.component';
import { DisplayUsersComponent } from './display-users/display-users.component';
import { AddUserComponent } from './add-user/add-user.component';
import { DisplayBooksComponent } from './display-books/display-books.component';
import { AddBookComponent } from './add-book/add-book.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { IssueBookComponent } from './issue-book/issue-book.component';
import { UserEditComponent } from './user-edit/user-edit.component';
import { DisplayIssuedBooksComponent } from './display-issued-books/display-issued-books.component';
import { ReturnBookComponent } from './return-book/return-book.component';

const routes: Routes = [
  {path: '', redirectTo: '/dashboard', pathMatch: 'full'},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'add-book', component: AddBookComponent},
  {path: 'display-books', component: DisplayBooksComponent},
  {path: 'add-user', component: AddUserComponent},
  {path: 'display-users', component: DisplayUsersComponent},
  {path: 'issue-book', component: IssueBookComponent},
  {path: 'book-detail/:id', component: BookDetailComponent},
  {path: 'user-edit/:id', component: UserEditComponent},
  {path: 'display-issued-book', component: DisplayIssuedBooksComponent},
  {path: 'return-book/:id', component: ReturnBookComponent},
  {path: 'book-form', component: BookFormComponent},
  {path: 'book-form/:id', component: BookFormComponent}

];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
