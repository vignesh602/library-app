import { AddUserComponent } from './add-user/add-user.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AddBookComponent } from './add-book/add-book.component';
import { DisplayBooksComponent } from './display-books/display-books.component';
import { DisplayUsersComponent } from './display-users/display-users.component';
import { IssueBookComponent } from './issue-book/issue-book.component';
import { BookDetailComponent } from './book-detail/book-detail.component';
import { NgSelectModule } from '@ng-select/ng-select';
import { UserEditComponent } from './user-edit/user-edit.component';
import { DisplayIssuedBooksComponent } from './display-issued-books/display-issued-books.component';
import { ReturnBookComponent } from './return-book/return-book.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {NgxPaginationModule} from 'ngx-pagination';
import {FilterPipe} from './display-books/display-books.filter.pipe';
import { BookFormComponent } from './book-form/book-form.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    AddBookComponent,
    DisplayBooksComponent,
    AddUserComponent,
    DisplayUsersComponent,
    IssueBookComponent,
    BookDetailComponent,
    UserEditComponent,
    DisplayIssuedBooksComponent,
    ReturnBookComponent,
    FilterPipe,
    BookFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    NgSelectModule,
    NgbModule.forRoot(),
    NgxPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
