import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';  // Import RouterModule
import { Router } from '@angular/router';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule],  // Add RouterModule here
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'skyapp';

  constructor(private router: Router) {}

  // Method to navigate to Homepage
  navigateToHome() {
    this.router.navigate(['/home']);
  }

  // Method to navigate to Profiles
  navigateToProfiles() {
    this.router.navigate(['/profiles']);
  }

  // Method to navigate to Reports (Vecpage)
  navigateToReports() {
    this.router.navigate(['/reports']);
  }
}