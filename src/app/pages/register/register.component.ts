import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../../core/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {
  loginForm!: FormGroup;
  passwordMinLength: number = 8;

  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router) {
    this.loginForm = this.fb.group({
      name: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(this.passwordMinLength)]),
      password_confirmation: new FormControl('', [Validators.required, Validators.minLength(this.passwordMinLength)]),
    })
  }

  validationPasswordConfirmation() {
    return this.loginForm.get('password')?.value === this.loginForm.get('password_confirmation')?.value
  }

  onSubmit(){
    if (this.loginForm.valid && this.validationPasswordConfirmation()){
      this.authService.onRegister(this.loginForm.value).subscribe({
        next: () => {
          this.router.navigate(['/']);
        },
      })
    } else {
      this.loginForm.markAsTouched();
    }
  }

  change() {
    console.log(this.loginForm);
  }
}
