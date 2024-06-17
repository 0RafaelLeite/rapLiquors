import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-conta',
  templateUrl: './conta.component.html',
  styleUrl: './conta.component.css'
})
export class ContaComponent {
  accountForm: FormGroup;
  addresses: { street: string }[] = [{ street: '' }];

  constructor(private fb: FormBuilder) {
    this.accountForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  addAddress() {
    this.addresses.push({ street: '' });
  }

  editAddress(index: number) {
  }

  removeAddress(index: number) {
    if (this.addresses.length > 1) {
      this.addresses.splice(index, 1);
    }
  }

  onSubmit() {
    if (this.accountForm.valid) {
      const userData = this.accountForm.value;
      console.log('User Data:', userData);
      console.log('Addresses:', this.addresses);
    }
  }
}
