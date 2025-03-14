import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';

@Component({
  selector: 'app-api-call',
  imports: [],
  templateUrl: './api-call.component.html',
  styleUrl: './api-call.component.css'
})

export class ApiCallComponent {
  http = inject(HttpClient);

  Users: any[] = [];
  UserList: any[] = [];

  getAllusers() {
    this.http.get("https://jsonplaceholder.typicode.com/users").subscribe((res: any) => {
      this.Users = res;
    })
  }

  getComplaintusers() {
    this.http.get("https://projectapi.gerasim.in/api/Complaint/GetAllUsers").subscribe((res: any) => {
      this.UserList = res.data;
      console.log(res.data)
    })
  }


}
