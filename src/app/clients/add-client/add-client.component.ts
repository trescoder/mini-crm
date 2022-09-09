import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ClientsService } from '../clients.service';

@Component({
  selector: 'app-add-client',
  templateUrl: './add-client.component.html',
  styleUrls: ['./add-client.component.css'],
})
export class AddClientComponent implements OnInit {
  myForm!: FormGroup;
  isFormValid = false;

  constructor(private fb: FormBuilder, private clientService: ClientsService) {}

  ngOnInit(): void {
    this.myForm = this.fb.group({
      name: [''],
      last_name: [''],
      email: [''],
      tel: [''],
      birthday: [''],
      address: [''],
      contact_type: ['Cliente'],
      origin: ['Landing page'],
    });

    this.myForm.valueChanges.subscribe(() => {
      this.validateForm();
    });
  }

  registerClient() {
    this.clientService.registerNewClient(this.myForm.value).subscribe(
      (data: any) => {
        if (data.success) {
          this.myForm.reset();
        }
      },
      (error: any) => {
        alert(error.error.message);
      }
    );
  }

  validateForm() {
    const { name, last_name, email, tel, birthday, address } =
      this.myForm.value;
    const current_date = new Date();
    const birthday_year = new Date(birthday).getFullYear();

    if (name.length < 2 || name.length >= 40) {
      this.isFormValid = false;
    } else if (last_name.length < 2 || last_name.length >= 40) {
      this.isFormValid = false;
    } else if (
      !String(email)
        .toLowerCase()
        .match(
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        )
    ) {
      this.isFormValid = false;
    } else if (isNaN(Number(tel)) || tel.length !== 10) {
      this.isFormValid = false;
    } else if (current_date.getFullYear() - 18 <= birthday_year) {
      this.isFormValid = false;
    } else if (address.length < 10) {
      this.isFormValid = false;
    } else {
      this.isFormValid = true;
    }
  }
}
