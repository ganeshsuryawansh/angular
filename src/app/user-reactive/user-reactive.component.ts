import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-reactive',
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './user-reactive.component.html',
  styleUrl: './user-reactive.component.css'
})
export class UserReactiveComponent {

  http = inject(HttpClient);
  UserList: any[] = [];

  useForm: FormGroup = new FormGroup({
    userId: new FormControl(0),
    userName: new FormControl("", [Validators.required, Validators.minLength(3)]),
    emailId: new FormControl(""),
    fullName: new FormControl(""),
    role: new FormControl(""),
    createdDate: new FormControl(new Date()),
    password: new FormControl(""),
    projectName: new FormControl(""),
    refreshToken: new FormControl(""),
    refreshTokenExpiryTime: new FormControl(new Date()),
  });

  onSubmit() {
    if (this.useForm.valid) {
      console.log("Form Submitted", this.useForm.value);
    } else {
      console.log("Form is invalid");
      this.useForm.markAllAsTouched(); // Mark all fields as touched to show errors
    }
  }

  onSave() {
    const formValue = this.useForm.value;
    this.http.post("https://projectapi.gerasim.in/api/Complaint/addnewuser", formValue).subscribe((res: any) => {
      // console.log(res)
    })
  }



  // getUsers() {
  //   this.http.get("https://projectapi.gerasim.in/api/Complaint/GetAllUsers").subscribe((res: any) => {
  //     this.UserList = res.data;
  //     // console.log(res.data)
  //   })
  // }

  // onSaveUser() {
  //   this.http.post("https://projectapi.gerasim.in/api/Complaint/addnewuser", this.userObj).subscribe((res: any) => {
  //     this.getUsers();
  //   })
  // }

  // onEdit(data: any) {
  //   // console.log(data)
  //   this.userObj = data
  // }

  // onUpdate() {
  //   this.http.post("https://projectapi.gerasim.in/api/Complaint/updateUser", this.userObj).subscribe((res: any) => {
  //     this.getUsers();
  //   })
  // }

  // onDeleteuser(id: number) {

  //   const isConfirm = confirm("Are you sure You want to delete!");
  //   // console.log(isConfirm);

  //   if (isConfirm) {
  //     this.http.delete("https://projectapi.gerasim.in/api/Complaint/DeleteUserbyUserId?userId=" + id).subscribe((res: any) => {
  //       this.getUsers();
  //     })
  //   }
  // }

}
