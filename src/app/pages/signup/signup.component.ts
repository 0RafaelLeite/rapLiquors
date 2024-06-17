import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../../services/api.service'; // Import the ApiService

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  signupForm: FormGroup;

  constructor(private fb: FormBuilder, private apiService: ApiService, private router: Router) { // Inject the ApiService and Router
    this.signupForm = this.fb.group({
      username: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required]
    }, { validators: this.passwordMatchValidator });
  }

  passwordMatchValidator(form: FormGroup) {
    return form.get('password')?.value === form.get('confirmPassword')?.value ? null : { mismatch: true };
  }

  signup() {
    if (this.signupForm.valid) {
      this.apiService.register(this.signupForm.value).subscribe({
        next: (response) => {
          // Handle successful signup
          this.router.navigate(['/login']);
        },
        error: (error) => {
          // Handle signup error
          console.error('Signup failed', error);
        }
      });
    }
  }
}
