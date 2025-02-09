import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'my-app';
  constructor(private http: HttpClient) {}
  callApi() {
    this.http.get('https://reqres.in/api/users?page=2').subscribe((data) => {
      console.log(data);
    });
  }
}
