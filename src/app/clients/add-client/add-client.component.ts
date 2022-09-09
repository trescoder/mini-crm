import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ClientsService } from '../clients.service';

@Component({
  selector: 'app-add-client',
  templateUrl: './add-client.component.html',
  styleUrls: ['./add-client.component.css'],
})
export class AddClientComponent implements OnInit {
  myForm!: FormGroup;

  constructor(private fb: FormBuilder, private clientService: ClientsService) {}

  ngOnInit(): void {
    this.myForm = this.fb.group({
      name: [
        '',
        Validators.required,
        Validators.minLength(2),
        Validators.maxLength(20),
      ],
      last_name: [
        '',
        Validators.required,
        Validators.minLength(2),
        Validators.maxLength(20),
      ],
      email: ['', Validators.required, Validators.email],
      tel: ['', Validators.required],
      birthday: ['', Validators.required],
      address: ['', Validators.required],
      contact_type: ['Cliente', Validators.required],
      origin: ['Landing page', Validators.required],
    });

    this.myForm.valueChanges.subscribe(() => {
      console.log(this.myForm.valid);
      console.log(this.myForm.invalid);
    });
  }

  registerClient() {
    this.clientService
      .registerNewClient(this.myForm.value)
      .subscribe((data: any) => {
        if (data.success) {
          this.myForm.reset();
        }
      });
  }
}
