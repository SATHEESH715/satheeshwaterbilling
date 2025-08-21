
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = '/api/auth';

  constructor(private http: HttpClient) { }

  register(data: { fullName: string; email: string; mobile: string; password: string; }): Observable<unknown> {
    return this.http.post(`${this.apiUrl}/register`, data);
  }

  login(data: { emailOrMobile: string; password: string; }): Observable<{ token: string; user: User }> {
    return this.http.post<{ token: string; user: User }>(`${this.apiUrl}/login`, data);
  }

  verifyOtp(data: { emailOrMobile: string; otp: string }): Observable<unknown> {
    return this.http.post(`${this.apiUrl}/verify-otp`, data);
  }

  forgotPassword(data: { emailOrMobile: string }): Observable<unknown> {
    return this.http.post(`${this.apiUrl}/forgot-password`, data);
  }

  resetPassword(data: { emailOrMobile: string; otp: string; newPassword: string }): Observable<unknown> {
    return this.http.post(`${this.apiUrl}/reset-password`, data);
  }
}
