import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  multipleItems: OwlOptions = {
    loop: true,
    margin: 10,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['<img src="../../../assets/icons/scrool-left.png" width="25" height="25">', '<img src="../../../assets/icons/scrool-right.png" width="25" height="25">'],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 1
      },
      740: {
        items: 3
      },
      940: {
        items: 3
      }
    },
    nav: true
  }

  customOptions: OwlOptions = {
    loop: true,
    margin: 10,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['<img src="../../../assets/icons/scrool-left.png" width="25" height="25">', '<img src="../../../assets/icons/scrool-right.png" width="25" height="25">'],
    responsive: {
      0: {
        items: 3,
      },
      400: {
        items: 1,
      },
      740: {
        items: 4,
      }
    }
  }

  apiData = [
    { id: 1, url: "assets/icons/Debraj Jana.jpg" },
    { id: 2, url: "assets/icons/Debraj Jana.jpg" },
    { id: 3, url: "assets/icons/Debraj Jana.jpg" },
    { id: 4, url: "assets/icons/Debraj Jana.jpg" },
    { id: 5, url: "assets/icons/Debraj Jana.jpg" },
    { id: 6, url: "assets/icons/Debraj Jana.jpg" },
    { id: 7, url: "assets/icons/Debraj Jana.jpg" },
    { id: 8, url: "assets/icons/Debraj Jana.jpg" },
    { id: 9, url: "assets/icons/Debraj Jana.jpg" },
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
