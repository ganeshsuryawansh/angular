import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-directive',
  imports: [NgIf, FormsModule, NgFor],
  templateUrl: './directive.component.html',
  styleUrl: './directive.component.css'
})

export class DirectiveComponent {
  isVisible: boolean = true;

  num1 = 0;
  num2 = 0;

  selected: string = '';

  cityList: string[] = ['Pune', 'Mumbai', 'Delhi', 'Bangalore', 'Chennai'];

  studentList: any[] = [
    { name: 'AAA', city: 'Pune', isActive: true },
    { name: 'BBB', city: 'Pune', isActive: true },
    { name: 'CCC', city: 'Pune', isActive: false },
    { name: 'DDD', city: 'Pune', isActive: true },
  ]

  hidediv() {
    this.isVisible = false;
  }

  showdiv() {
    this.isVisible = true;
  }
}
