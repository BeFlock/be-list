import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../../core/services/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  loginForm!: FormGroup;
  passwordMinLength: number = 8;

  constructor(private fb: FormBuilder, private authService: AuthService) {
    this.loginForm = this.fb.group({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(this.passwordMinLength)]),
    })
  }

  onSubmit(){
    if (this.loginForm.valid){
      this.authService.onLogin(this.loginForm.value).subscribe({
        next: () => {},
      })
    } else {
      this.loginForm.markAsTouched();
    }
  }

  change() {
    console.log(this.loginForm);
  }
}
