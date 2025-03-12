import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-data-binding',
  imports: [FormsModule],
  templateUrl: './data-binding.component.html',
  styleUrl: './data-binding.component.css'
})
export class DataBindingComponent {

  courseName: string = 'Angular 19';
  isActive: boolean = true;

  showwelcometext() {
    alert('Welcome to Angular 19');
  }

  showMessage(msg: string) {
    alert(msg);
  }

  onStateChange() {
    alert("State Changed");
  }
}
