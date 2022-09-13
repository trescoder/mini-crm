import { HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../auth/auth.service';
import { JwtService } from '../../auth/jwt.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  public error_msg = '';
  form: FormGroup = this.formBuilder.group({
    username: ['', Validators.required],
    password: ['', Validators.required],
  });

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private jwtService: JwtService,
    private router: Router
  ) {}

  ngOnInit(): void {
    if (this.jwtService.isLoggedIn()) {
      this.router.navigateByUrl('/user/clients');
    }
  }

  login() {
    this.authService.login(this.form.value).subscribe(
      (data) => {
        this.jwtService.saveToken(data.token);
        this.router.navigateByUrl('/user/clients');
      },
      (error) => {
        this.router.navigateByUrl('/auth/login');
        this.error_msg = 'username or password incorrect';
        setTimeout(() => (this.error_msg = ''), 4000);
      }
    );
  }
}
