import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  btnLogin: boolean;
  btnLogout: boolean;
  constructor(
    private router: Router,
  ) {}

  ngOnInit() {
    
  }



}
