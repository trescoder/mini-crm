import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { JwtService } from '../../auth/jwt.service';

@Component({
  selector: 'app-clients-view',
  templateUrl: './clients-view.component.html',
  styleUrls: ['./clients-view.component.css'],
})
export class ClientsViewComponent implements OnInit {
  constructor(private jwtService: JwtService, private router: Router) {}

  ngOnInit(): void {}

  logOut() {
    this.jwtService.logOut();
    this.router.navigateByUrl('/auth/login');
  }
}
