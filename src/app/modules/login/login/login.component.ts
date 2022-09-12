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
    this.authService.login(this.form.value).subscribe({
      next: (result: any) => {
        this.jwtService.saveToken(result.token);
        this.router.navigateByUrl('/user/clients');
      },
    });
  }
}
