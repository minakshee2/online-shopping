import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {
  FormArray,
  FormBuilder,
  FormGroup,
  Validators,
  AbstractControl,
  ValidationErrors,
} from '@angular/forms';
import { IuserRegister } from '../models/userRegister.model';
import { AuthServicesService } from '../services/authservices.service';

/* Password hashing should be handled on the backend for security. */

@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrl: './register-user.component.css',
})
export class RegisterUserComponent {
  userForm: FormGroup;
  userData: IuserRegister;
  password: string;

  constructor(
    private fb: FormBuilder,
    private authService: AuthServicesService,
    private router: Router
  ) {
    this.userForm = this.fb.group(
      {
        name: ['', [Validators.required, this.noNumbersValidator]],
        contact: ['', [Validators.required, this.mobileOrEmailValidator]],
        password: ['', [Validators.required, this.strongPasswordValidator]],
        confirmPassword: ['', [Validators.required]],
      },
      { validators: this.passwordMatchValidator }
    );
  }

  // Custom validator: No numbers allowed
  noNumbersValidator(control: AbstractControl): ValidationErrors | null {
    const hasNumber = /\d/.test(control.value);
    return hasNumber ? { noNumbersAllowed: true } : null;
  }

  mobileOrEmailValidator(control: AbstractControl): ValidationErrors | null {
    const value = control.value;

    if (!value) return null; // Let required validator handle empty case

    const mobilePattern = /^[6-9]\d{9}$/;
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

    const isMobile = mobilePattern.test(value);
    const isEmail = emailPattern.test(value);

    return isMobile || isEmail ? null : { mobileOrEmail: true };
  }

  strongPasswordValidator(control: AbstractControl): ValidationErrors | null {
    const value = control.value || '';

    const hasUpper = /[A-Z]/.test(value);
    const hasLower = /[a-z]/.test(value);
    const hasDigit = /\d/.test(value);
    const hasSpecial = /[@$!%*?&]/.test(value);
    const isLongEnough = value.length >= 8;

    const isValid =
      hasUpper && hasLower && hasDigit && hasSpecial && isLongEnough;

    return isValid ? null : { strongPassword: true };
  }

  passwordMatchValidator(control: AbstractControl): ValidationErrors | null {
    const password = control.get('password')?.value;
    const confirmPassword = control.get('confirmPassword')?.value;

    if (!password || !confirmPassword) return null; // Skip if one is empty

    return password === confirmPassword ? null : { passwordMismatch: true };
  }

  // Placeholder for password hashing; actual hashing should be done on the backend.

  onSubmit(): void {
    if (this.userForm.valid) {
      this.userData = {
        userId: '1',
        name: this.userForm.value.name,
        userLogin: this.userForm.value.contact,
        password: this.userForm.value.password,
      };
      console.log('User Data:', this.userData);

      console.log('Form Submitted', this.userForm.value);
      //this.registerUserService.postUserRegistration(this.userForm.value);
      this.authService.postUserRegistration(this.userData).subscribe({
        next: (response) => {
          console.log('Success:', response);
          this.router.navigate(['signin']);
        },
        error: (error) => {
          console.error('Error:', error);
        },
      });
    } else {
      console.log('Form is invalid');
    }
  }
}
