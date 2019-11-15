import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(public http:HttpClient)
   { }

   getdata()
   {
      return this.http.get("http://52.66.239.51:4500/student");
   }
   addData(student:any)
   {
    return this.http.post("http://52.66.239.51:4500/student",student);
   }

   deleteData(student:any)
   {
    return this.http.delete("http://52.66.239.51:4500/student/"+student);
   }

   updateData(student:any)
   {
    return this.http.put("http://52.66.239.51:4500/student/"+student.rno,student);
   }
}
