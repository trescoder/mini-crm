import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../auth/auth.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css'],
})
export class SignUpComponent implements OnInit {
  public error_msg = '';
  form: FormGroup = this.formBuilder.group({
    username: new FormControl('', {
      validators: [
        Validators.required,
        Validators.minLength(4),
        Validators.maxLength(30),
      ],
    }),
    password: new FormControl('', {
      validators: [Validators.required, Validators.minLength(6)],
    }),
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
