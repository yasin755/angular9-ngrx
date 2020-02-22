import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  links: any;

  constructor() { }

  ngOnInit(): void {
    this.getHomeNavLinks();
  }

  getHomeNavLinks() {
    this.links = [
      {
        "link": "Adding customer(s)",
        "navLink": "/adding-customer"
      }
    ]
  }

}
