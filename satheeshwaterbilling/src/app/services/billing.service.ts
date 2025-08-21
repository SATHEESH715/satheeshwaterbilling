
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Billing } from '../models/billing.model';

@Injectable({
  providedIn: 'root'
})
export class BillingService {
  private apiUrl = '/api/billing';

  constructor(private http: HttpClient) { }

  getAll(): Observable<Billing[]> {
    return this.http.get<Billing[]>(this.apiUrl);
  }

  getById(id: string): Observable<Billing> {
    return this.http.get<Billing>(`${this.apiUrl}/${id}`);
  }

  create(billing: Partial<Billing>): Observable<Billing> {
    return this.http.post<Billing>(this.apiUrl, billing);
  }

  update(id: string, billing: Partial<Billing>): Observable<Billing> {
    return this.http.put<Billing>(`${this.apiUrl}/${id}`, billing);
  }

  delete(id: string): Observable<unknown> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
