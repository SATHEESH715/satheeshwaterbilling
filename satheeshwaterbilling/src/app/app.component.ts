import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './header.component';
import { FooterComponent } from './footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule, HeaderComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 

    contact = {
    name: '',
    email: '',
    message: ''
  };

  scrollToContact() {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  }

  submitForm() {
    if(this.contact.name && this.contact.email && this.contact.message) {
      alert(`Thank you, ${this.contact.name}! We have received your message.`);
      this.contact = { name: '', email: '', message: '' };
    }
  }
}
