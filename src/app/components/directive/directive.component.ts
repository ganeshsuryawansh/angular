import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-directive',
  imports: [NgIf, FormsModule],
  templateUrl: './directive.component.html',
  styleUrl: './directive.component.css'
})
export class DirectiveComponent {
  isVisible: boolean = true;

  num1 = 0;
  num2 = 0;

  selected: string = '';

  hidediv() {
    this.isVisible = false;
  }

  showdiv() {
    this.isVisible = true;
  }
}
