
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-verify-otp',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './verify-otp.component.html',
  styleUrls: ['./verify-otp.component.css']
})
export class VerifyOtpComponent {
  otpForm: FormGroup;
  loading = false;
  error: string | null = null;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {
    this.otpForm = this.fb.group({
      emailOrMobile: ['', [Validators.required]],
      otp: ['', [Validators.required, Validators.pattern('^[0-9]{4,6}$')]]
    });
  }

  onSubmit() {
    if (this.otpForm.invalid) return;
    this.loading = true;
    this.error = null;
    this.authService.verifyOtp(this.otpForm.value).subscribe({
      next: () => {
        this.router.navigate(['/login']);
      },
      error: (err) => {
        this.error = err.error?.message || 'OTP verification failed';
        this.loading = false;
      },
      complete: () => {
        this.loading = false;
      }
    });
  }
}
