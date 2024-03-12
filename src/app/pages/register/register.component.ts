import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../../core/services/auth.service';
import { Router } from '@angular/router';
import { IAlert, AlertComponent } from '../../shared/ui/alert/alert.component';

@Component({
    selector: 'app-register',
    standalone: true,
    templateUrl: './register.component.html',
    styleUrl: './register.component.scss',
    imports: [ReactiveFormsModule, AlertComponent]
})
export class RegisterComponent {
  loginForm!: FormGroup;
  passwordMinLength: number = 8;
  alert: IAlert = { show: false };

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

  change() {
    console.log(this.loginForm);
  }
}
