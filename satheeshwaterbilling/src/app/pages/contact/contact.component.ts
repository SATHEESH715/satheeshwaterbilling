// src/app/pages/contact/contact.component.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  standalone: true,
  imports: [CommonModule, FormsModule],
  selector: 'app-contact',
  templateUrl: './contact.component.html'
})
export class ContactComponent {
  name = '';
  email = '';
  message = '';

  sendMessage() {
    alert(`Thanks ${this.name}, we will contact you soon!`);
  }
}
