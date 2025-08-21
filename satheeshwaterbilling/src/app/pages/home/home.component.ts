
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  sliderImages: string[] = [
    // 5 HD sea/water images
    'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1600&q=90', // Sea 1
    'https://images.unsplash.com/photo-1465101178521-c1a9136a3b99?auto=format&fit=crop&w=1600&q=90', // Blue water
    'https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&w=1600&q=90', // Water drop/sea
    'https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=1600&q=90', // Ocean sunset
    'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1600&q=90'  // Waves
  ];
  currentSlide = 0;
  companyInfo = {
    name: 'AquaPure Water Company',
    address: 'Salem, Tamil Nadu, Dharapuram 636309',
    phone: '9003932715',
    email: 'satheesh677&#64;gmail.com'
  };

  menu = [
    { label: 'Home', path: '/' },
    { label: 'Login', path: '/login' },
    { label: 'Register', path: '/register' },
    { label: 'Billing', path: '/billing' },
    { label: 'Category/Product', path: '/category' },
    { label: 'Admin Dashboard', path: '/admin' }
  ];

  uploadedImages: string[] = [];

  onImageUpload(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (!input.files) return;
    const files = Array.from(input.files).slice(0, 2); // Only allow up to 2 images
    this.uploadedImages = [];
    files.forEach(file => {
      const reader = new FileReader();
      reader.onload = (e: ProgressEvent<FileReader>) => {
        if (e.target && typeof e.target.result === 'string') {
          this.uploadedImages.push(e.target.result);
        }
      };
      reader.readAsDataURL(file);
    });
  }

  nextSlide() {
    this.currentSlide = (this.currentSlide + 1) % this.sliderImages.length;
  }
  prevSlide() {
    this.currentSlide = (this.currentSlide - 1 + this.sliderImages.length) % this.sliderImages.length;
  }
}
