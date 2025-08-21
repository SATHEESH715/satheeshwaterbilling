
import { Component } from '@angular/core';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent {
  filter: 'day' | 'week' | 'month' | 'year' = 'day';

  // Example static data for summary
  waterSummary = {
    day: 120,
    week: 800,
    month: 3200,
    year: 40000
  };
  billingSummary = {
    day: 2400,
    week: 16000,
    month: 64000,
    year: 800000
  };


}
