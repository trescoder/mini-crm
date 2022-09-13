import { HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../auth/auth.service';
import { ClientsService } from '../../clients/services/clients.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css'],
})
export class SignUpComponent implements OnInit {
  public error_msg = '';
  form: FormGroup = this.formBuilder.group({
    username: ['', Validators.required],
    password: ['', Validators.required],
  });

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  signUp() {
    this.authService.signUp(this.form.value).subscribe(
      (response) => {
        alert('user registered!');
        this.router.navigateByUrl('/auth/login');
      },
      (error) => {
        this.error_msg = 'This username is already taken';
        setTimeout(() => (this.error_msg = ''), 4000);
      }
    );
  }
}
