
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { Category } from '../../models/category.model';
import { Billing } from '../../models/billing.model';

@Component({
  selector: 'app-billing',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './billing.component.html',
  styleUrls: ['./billing.component.css']
})
export class BillingComponent {
  categories: Category[] = [
    { id: '1', name: '25L Bottle', description: '', price: 120, stock: 100, imageUrl: '', createdAt: new Date(), updatedAt: new Date() },
    { id: '2', name: '2L Bottle', description: '', price: 30, stock: 200, imageUrl: '', createdAt: new Date(), updatedAt: new Date() },
    { id: '3', name: '1L Bottle', description: '', price: 20, stock: 300, imageUrl: '', createdAt: new Date(), updatedAt: new Date() },
    { id: '4', name: '500ml Bottle', description: '', price: 10, stock: 400, imageUrl: '', createdAt: new Date(), updatedAt: new Date() },
    { id: '5', name: '300ml Bottle', description: '', price: 8, stock: 500, imageUrl: '', createdAt: new Date(), updatedAt: new Date() }
  ];
  billings: Billing[] = [];
  billingForm: FormGroup;
  showInvoice = false;
  selectedBilling: Billing | null = null;

  constructor(private fb: FormBuilder) {
    this.billingForm = this.fb.group({
      categoryId: ['', Validators.required],
      quantity: [1, [Validators.required, Validators.min(1)]]
    });
  }

  getCategory(catId: string): Category | undefined {
    return this.categories.find(c => c.id === catId);
  }

  getTotalAmount(catId: string, qty: number): number {
    const cat = this.getCategory(catId);
    return cat ? cat.price * qty : 0;
  }

  onSubmit() {
    if (this.billingForm.invalid) return;
    const { categoryId, quantity } = this.billingForm.value;
    const totalAmount = this.getTotalAmount(categoryId, quantity);
    const billing: Billing = {
      id: (Math.random() * 100000).toFixed(0),
      userId: 'demo-user',
      categoryId,
      quantity,
      totalAmount,
      paymentStatus: 'pending',
      createdAt: new Date(),
      updatedAt: new Date()
    };
    this.billings.push(billing);
    this.billingForm.reset({ categoryId: '', quantity: 1 });
  }

  viewInvoice(billing: Billing) {
    this.selectedBilling = billing;
    this.showInvoice = true;
  }

  closeInvoice() {
    this.showInvoice = false;
    this.selectedBilling = null;
  }
}
