import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { IssueServiceService } from '../service/issue-service/issue-service.service';

@Component({
  selector: 'app-return-book',
  templateUrl: './return-book.component.html',
  styleUrls: ['./return-book.component.css']
})
export class ReturnBookComponent implements OnInit {

  issuedBooksFromLocalStorage = [];
  recordId;
  singleIssuedBook;
  issueDate;
  dueDate;
  dayscount;
  calculatedAmount;
  toggle = false;
  
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private issueService: IssueServiceService
  ) { }

  ngOnInit() {
    this.issuedBooksFromLocalStorage = JSON.parse(window.localStorage.getItem('issue'));
       this.recordId = this.route.snapshot.paramMap.get('id');
      if(this.recordId){
        this.getIssuedBookDataById(this.recordId);
      }
  }

  getIssuedBookDataById(id){
    this.singleIssuedBook =this.issuedBooksFromLocalStorage.find((s:any)=> s.recordId==id);
    // this.issueDate = this.singleIssuedBook.issueDate;
    this.dueDate = this.singleIssuedBook.dueDate;
    
    let today = new Date();
    let dd = today.getDate();
    let mm = today.getMonth()+1;
    let yy = today.getFullYear();
    let date = mm+'/'+dd+'/'+yy;
    console.log(date);
    
    let date1 = new Date(this.dueDate);
    let date2 = new Date(date);
    let timeDiff = Math.abs(date2.getTime() - date1.getTime());
    let diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24));
    console.log(timeDiff);
    console.log(diffDays);
    if(date1 < date2){
      this.toggle = true;
      this.dayscount = diffDays;
      this.calculatedAmount = this.dayscount * 1;
    }
     
    
  }
  returnBook(){
      this.issueService.bookReturn(this.recordId);
      // let removeIndex = this.issuedBooksFromLocalStorage.map((item)=>{ 
      //   return item.recordId;
      // }).indexOf(this.recordId);
      // console.log(this.issuedBooksFromLocalStorage);
      // this.issuedBooksFromLocalStorage.splice(removeIndex,1);
      // console.log('after-->',this.issuedBooksFromLocalStorage);
      // window.localStorage.setItem('issue', JSON.stringify(this.issuedBooksFromLocalStorage));
      // this.router.navigate(['/display-issued-book'])
    }
    
  

}
