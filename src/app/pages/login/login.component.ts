import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../../core/services/auth.service';
import { AlertComponent, IAlert } from "../../shared/ui/alert/alert.component";

@Component({
  selector: 'app-login',
  standalone: true,
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
  imports: [ReactiveFormsModule, AlertComponent]
})
export class LoginComponent {
  alert: IAlert = { show: false };
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
        error: error => {
          this.alert = {
            show: true,
            message: error
          }
        }
      })
    } else {
      this.loginForm.markAsTouched();
    }
  }
}
