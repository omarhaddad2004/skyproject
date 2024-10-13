import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HighlightPipe } from '../highlight.pipe';
import { VacationRequestService } from '../vacation-request.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-vecpage2',
  standalone:true,
  templateUrl: './vecpage.component.html',  // Same HTML as VecpageComponent
  imports:[ CommonModule ,FormsModule ,HighlightPipe],
  styleUrls: ['./vecpage.component.css']    // Same styles as VecpageComponent
})
export class Vecpage2Component {
  searchTerm: string = '';
  requests: any[] = [];

  constructor(private vacationRequestService: VacationRequestService, private router: Router) {
    // Fetch only the requests from 10 to 19 for the second page
    this.requests = this.vacationRequestService.getData().slice(9, 19);
  }

  // Function to filter requests based on the search term
  filteredRequests() {
    return this.requests.filter(request =>
      request.name.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }

  // Pagination: Navigate to previous page (Vecpage)
  navigateToPrevious() {
    this.router.navigate(['/reports']);
  }

  // Pagination: Handle navigation from the pagination buttons
  navigateTo(page: number) {
    if (page === 1) {
      this.router.navigate(['/reports']);
    }
  }
}
