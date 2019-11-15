import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  students;
  constructor(public router:Router,public service:DataService)
   { 
    this.getdata();
   }

   getdata()
   {
     this.service.getdata().subscribe((result)=>{
       console.log(result);
        this.students=result;
     });
   }

   gotoRegister()
   {
     this.router.navigate(['register']);
   }


   deleteData(rno:any)
   {
     this.service.deleteData(rno).subscribe((result)=>{
        this.getdata();
     });
   }

  ngOnInit() {
  }

}
