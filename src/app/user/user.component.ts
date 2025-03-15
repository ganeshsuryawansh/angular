import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-user',
  imports: [FormsModule],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})


export class UserComponent {

  http = inject(HttpClient);
  UserList: any[] = [];

  userObj: any = {
    "userId": 0,
    "userName": "",
    "emailId": "",
    "fullName": "",
    "role": "",
    "createdDate": new Date(),
    "password": "",
    "projectName": "",
    "refreshToken": "",
    "refreshTokenExpiryTime": new Date()
  }

  constructor() {
    this.getUsers();
  }

  getUsers() {
    this.http.get("https://projectapi.gerasim.in/api/Complaint/GetAllUsers").subscribe((res: any) => {
      this.UserList = res.data;
      // console.log(res.data)
    })
  }

  onSaveUser() {
    this.http.post("https://projectapi.gerasim.in/api/Complaint/addnewuser", this.userObj).subscribe((res: any) => {
      this.getUsers();
    })
  }

  onEdit(data: any) {
    // console.log(data)
    this.userObj = data
  }

  onUpdate() {
    this.http.post("https://projectapi.gerasim.in/api/Complaint/updateUser", this.userObj).subscribe((res: any) => {
      this.getUsers();
    })
  }

  onDeleteuser(id: number) {

    const isConfirm = confirm("Are you sure You want to delete!");
    console.log(isConfirm);

    if (isConfirm) {
      this.http.delete("https://projectapi.gerasim.in/api/Complaint/DeleteUserbyUserId?userId=" + id).subscribe((res: any) => {
        this.getUsers();
      })
    }
  }
}
