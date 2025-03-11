import { Component } from '@angular/core';

@Component({
  selector: 'app-variables',
  imports: [],
  templateUrl: './variables.component.html',
  styleUrl: './variables.component.css'
})
export class VariablesComponent {
  // string
  firstname: string = "Ganesh";
  lastname: string = "Suryawanshi";
  coursename: string = "";

  // number
  rollno: number = 101;

  // boolean
  isactive: boolean = true;

  //  date
  dob: Date = new Date();

  // any
  student: any; // this datatype Supports all types of data -> string, number, boolean, date, array , Objects.

  constructor() {
    this.coursename = "Angular 19";
    this.rollno = 102;
    this.student = "Ganesh";
    this.student = 101;
    this.student = true;
  }
}
