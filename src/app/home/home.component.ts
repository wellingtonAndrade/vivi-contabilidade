import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  images = ['../assets/banner1.jpg', '../assets/banner2.jpg', '../assets/banner3.jpg'];
  showNavigationArrows = false;
  showNavigationIndicators = false;
  pauseOnHover = false;
  interval = 10000

  constructor() {
  }

  ngOnInit(): void {

  }

}
