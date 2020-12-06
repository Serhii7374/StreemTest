import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  users: {};

  constructor() { }

  ngOnInit(): void {
    this.getDate();
  }

  async getDate() {
    let response = await fetch("https://5fca3e863c1c220016441fcc.mockapi.io/api/v1/users");

    if (response.ok) {
      let json = await response.json();
      this.users = json;   
    } else {
      alert("Ошибка HTTP: " + response.status);
    }
  }


}
