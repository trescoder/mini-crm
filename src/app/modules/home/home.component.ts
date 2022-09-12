import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { JwtService } from '../auth/jwt.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  isLoggedIn = this.jwtService.isLoggedIn();

  constructor(private jwtService: JwtService, private router: Router) {}

  ngOnInit(): void {
    this.isLoggedIn = this.jwtService.isLoggedIn();
    this.router.navigateByUrl('/auth/login');
  }
}
