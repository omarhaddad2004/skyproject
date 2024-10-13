import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';



@Component({
  selector: 'app-profpage',
  imports:[ CommonModule ,FormsModule ,RouterModule],
  standalone: true,
  templateUrl: './profpage.component.html',
  styleUrls: ['./profpage.component.css']
})
export class ProfpageComponent {
  searchTerm: string = '';

  // Sample data for history records
  historyRecords = [
    { title: 'Annual Vacation', date: '2/3/2023 - 10/3/2023', days: 8, approver: 'Hazem Azmi' },
    { title: 'Sick Vacation', date: '2/3/2023 - 10/3/2023', days: 8, approver: 'Hazem Azmi' }
  ];

  // Sample data for pending requests
  pendingRequests = [
    { image: 'https://wpuploads.appadvice.com/wp-content/uploads/2014/10/facebookanon.jpg', name: 'Ahmad Attar', submittedOn: '2/3/2024', duration: '2 Weeks (1/4/2023 - 14/4/2023)', currentlyAt: 'Omar Ahmad' }
    ,{ image: 'https://wpuploads.appadvice.com/wp-content/uploads/2014/10/facebookanon.jpg', name: 'sara Attar', submittedOn: '12/8/2023', duration: '2 Weeks (1/4/2023 - 14/4/2023)', currentlyAt: 'Omar Ahmad' }
    ,{ image: 'https://wpuploads.appadvice.com/wp-content/uploads/2014/10/facebookanon.jpg', name: 'omar Attar', submittedOn: '8/6/2022', duration: '2 Weeks (1/4/2023 - 14/4/2023)', currentlyAt: 'Omar Ahmad' }
  ];

  constructor() {
    console.log('History Records:', this.historyRecords);
    console.log('Pending Requests:', this.pendingRequests);
  }

  get filteredHistoryRecords() {
    return this.historyRecords.filter(record =>
      record.title.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
      record.date.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }

  get filteredPendingRequests() {
    return this.pendingRequests.filter(request =>
      request.name.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }

  onNewRequestClick() {
    alert("New Request Button Clicked!");
  }
}
