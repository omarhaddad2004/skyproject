import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';



@Component({
  selector: 'app-homepage',
  standalone:true,
  imports:[FormsModule,CommonModule,RouterModule],
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css'],
  
})
export class HomepageComponent {
  // Define the search query for two-way data binding
  searchQuery: string = '';

  // Simulating requests data for demonstration purposes
  requests = [
    {
      name: 'Ahmad Attar',
      submittedDate: '7/3/2024',
      duration: '2 Weeks (1/4/2023 - 14/4/2023)',
      salary: '1000 AED',
    },
    {
      name: 'Susan Haddad',
      submittedDate: '7/3/2024',
      duration: '2 Weeks (1/4/2023 - 14/4/2023)',
      salary: '1000 AED',
    },
    {
      name: 'Omar Haddad',
      submittedDate: '7/3/2024',
      duration: '2 Weeks (1/4/2023 - 14/4/2023)',
      salary: '1000 AED',
    }
  ];

  // Function to filter requests based on search input
  filterRequests() {
    const searchbox = this.searchQuery.toUpperCase();
    return this.requests.filter(request =>
      request.name.toUpperCase().includes(searchbox)
    );
  }
}
