import { NgClass, NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-directive',
  imports: [NgIf, FormsModule, NgFor, NgClass],
  templateUrl: './directive.component.html',
  styleUrl: './directive.component.css'
})

export class DirectiveComponent {
  isVisible: boolean = true;
  studDivClassName = "bg-success";
  isOrderActive: boolean = false;

  num1 = 0;
  num2 = 0;

  studEmpDivClass = "";

  selected: string = '';
  cityList: string[] = ['Pune', 'Mumbai', 'Delhi', 'Bangalore', 'Chennai'];
  isDiv1Visible: boolean = false;

  studentList: any[] = [
    { name: 'AAA', city: 'Pune', isActive: true, grade: 'A' },
    { name: 'BBB', city: 'Pune', isActive: true, grade: 'B' },
    { name: 'CCC', city: 'Pune', isActive: false, grade: '' },
    { name: 'DDD', city: 'Pune', isActive: true, grade: 'D' },
  ]

  hidediv() {
    this.isVisible = false;
  }

  showdiv() {
    this.isVisible = true;
  }
}
