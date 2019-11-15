import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Route } from '@angular/compiler/src/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(public router:Router,public service:DataService) { }

  addData(datafromUI:any)
  {
    var student=datafromUI.form.value;
    this.service.addData(student).subscribe((result)=>{
      this.router.navigate(['home']);
    });

  }

  ngOnInit() {
  }

}
