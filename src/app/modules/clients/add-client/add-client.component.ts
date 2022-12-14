import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { RegisterClient } from 'src/app/interfaces/registered-client';
import { ClientsService } from '../services/clients.service';

@Component({
  selector: 'app-add-client',
  templateUrl: './add-client.component.html',
  styleUrls: ['./add-client.component.css'],
})
export class AddClientComponent implements OnInit {
  myForm!: FormGroup;
  isFormValid = false;
  showLoadingBar = false;

  constructor(private fb: FormBuilder, private clientService: ClientsService) {}

  ngOnInit(): void {
    this.myForm = this.fb.group({
      name: new FormControl('', {
        validators: [
          Validators.required,
          Validators.minLength(2),
          Validators.maxLength(40),
        ],
      }),
      last_name: new FormControl('', {
        validators: [
          Validators.required,
          Validators.minLength(2),
          Validators.maxLength(40),
        ],
      }),
      email: new FormControl('', {
        validators: [Validators.required, Validators.email],
      }),
      tel: new FormControl('', {
        validators: [
          Validators.required,
          Validators.minLength(7),
          Validators.maxLength(10),
        ],
      }),
      birthday: [''],
      address: new FormControl('', {
        validators: [Validators.required, Validators.minLength(10)],
      }),
      contact_type: ['Cliente'],
      origin: ['Landing page'],
    });

    this.myForm.valueChanges.subscribe(() => {
      this.validateForm();
    });
  }

  registerClient() {
    this.showLoadingBar = true;
    this.normalizeForm();

    this.clientService.registerNewClient(this.myForm.value).subscribe(
      (data: RegisterClient) => {
        if (data.success) {
          this.showLoadingBar = false;
          alert('client added');
          this.myForm.reset();
        }
      },
      (error: any) => {
        this.showLoadingBar = false;
        alert(error.error.message);
      }
    );
  }

  validateForm() {
    if (this.myForm.untouched) {
      return;
    }
    const { birthday, tel } = this.myForm.value;
    const current_date = new Date();
    const birthday_year = new Date(birthday).getFullYear();
    if ((tel.length !== 7 && tel.length !== 10) || isNaN(Number(tel))) {
      this.isFormValid = false;
    } else if (!birthday || current_date.getFullYear() - 18 <= birthday_year) {
      this.isFormValid = false;
    } else if (this.myForm.invalid) {
      this.isFormValid = false;
    } else {
      this.isFormValid = true;
    }
    console.log(this.isFormValid);
  }

  normalizeForm() {
    this.myForm.value.name = this.myForm.value.name.toLowerCase();
    this.myForm.value.last_name = this.myForm.value.last_name.toLowerCase();
    this.myForm.value.address = this.myForm.value.address.toLowerCase();
    this.myForm.value.email = this.myForm.value.email.toLowerCase();
    console.log(this.myForm.value);
  }
}
