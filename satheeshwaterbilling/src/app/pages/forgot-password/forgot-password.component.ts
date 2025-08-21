
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-forgot-password',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent {
  forgotForm: FormGroup;
  loading = false;
  error: string | null = null;
  success: string | null = null;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {
    this.forgotForm = this.fb.group({
      emailOrMobile: ['', [Validators.required]]
    });
  }

  onSubmit() {
    if (this.forgotForm.invalid) return;
    this.loading = true;
    this.error = null;
    this.success = null;
    this.authService.forgotPassword(this.forgotForm.value).subscribe({
      next: () => {
        this.success = 'OTP sent to your email/mobile.';
      },
      error: (err) => {
        this.error = err.error?.message || 'Request failed';
        this.loading = false;
      },
      complete: () => {
        this.loading = false;
      }
    });
  }
}
