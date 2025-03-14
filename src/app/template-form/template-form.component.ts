import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-template-form',
  imports: [FormsModule],
  templateUrl: './template-form.component.html',
  styleUrl: './template-form.component.css'
})
export class TemplateFormComponent {

  userForm: any = {
    name: "",
    email: "",
    password: ""
  }


  onSaveUser() {
    const formvalue = this.userForm;
    console.log(formvalue);
    debugger;
  }
}
