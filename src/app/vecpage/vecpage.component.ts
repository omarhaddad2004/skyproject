import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HighlightPipe } from '../highlight.pipe';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-vecpage',
  imports:[ CommonModule , HighlightPipe,FormsModule],
  standalone: true,  // Mark this component as standalone
  templateUrl: './vecpage.component.html',
  styleUrls: ['./vecpage.component.css']
})
export class  VecpageComponent {
    searchTerm: string = '';
    currentPage: number = 1;

  requests = [
    {
      name: 'jack haddad',
      submittedDate: '7/3/2024',
      duration: '2 Weeks (1/4/2023 - 14/4/2023)',
      salary: 1000,
      image: 'https://wpuploads.appadvice.com/wp-content/uploads/2014/10/facebookanon.jpg',
      selected: false
    },
    {
      name: 'ahmad haddad',
      submittedDate: '7/3/2024',
      duration: '2 Weeks (1/4/2023 - 14/4/2023)',
      salary: 1000,
      image: 'https://wpuploads.appadvice.com/wp-content/uploads/2014/10/facebookanon.jpg',
      selected: false
    },
    {
      name: 'zaid haddad',
      submittedDate: '7/3/2024',
      duration: '2 Weeks (1/4/2023 - 14/4/2023)',
      salary: 1000,
      image: 'https://wpuploads.appadvice.com/wp-content/uploads/2014/10/facebookanon.jpg',
      selected: false
    },
    {
      name: 'omar haddad',
      submittedDate: '7/3/2024',
      duration: '2 Weeks (1/4/2023 - 14/4/2023)',
      salary: 1000,
      image: 'https://wpuploads.appadvice.com/wp-content/uploads/2014/10/facebookanon.jpg',
      selected: false
    },
    {
      name: 'mera haddad',
      submittedDate: '7/3/2024',
      duration: '2 Weeks (1/4/2023 - 14/4/2023)',
      salary: 1000,
      image: 'https://wpuploads.appadvice.com/wp-content/uploads/2014/10/facebookanon.jpg',
      selected: false
    },
    {
      name: 'nedaa haddad',
      submittedDate: '7/3/2024',
      duration: '2 Weeks (1/4/2023 - 14/4/2023)',
      salary: 1000,
      image: 'https://wpuploads.appadvice.com/wp-content/uploads/2014/10/facebookanon.jpg',
      selected: false
    },
    {
      name: 'swsan haddad',
      submittedDate: '7/3/2024',
      duration: '2 Weeks (1/4/2023 - 14/4/2023)',
      salary: 1000,
      image: 'https://wpuploads.appadvice.com/wp-content/uploads/2014/10/facebookanon.jpg',
      selected: false
    },
    {
      name: 'sara haddad',
      submittedDate: '7/3/2024',
      duration: '2 Weeks (1/4/2023 - 14/4/2023)',
      salary: 1000,
      image: 'https://wpuploads.appadvice.com/wp-content/uploads/2014/10/facebookanon.jpg',
      selected: false
    },
    {
      name: 'messi haddad',
      submittedDate: '7/3/2024',
      duration: '2 Weeks (1/4/2023 - 14/4/2023)',
      salary: 1000,
      image: 'https://wpuploads.appadvice.com/wp-content/uploads/2014/10/facebookanon.jpg',
      selected: false
    },
    
    
  ];

  // Function to filter requests based on search term
  filteredRequests() {
    return this.requests.filter(request =>
      request.name.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }
  selectAll(event: any) {
    const isChecked = event.target.checked;
    this.requests.forEach(request => request.selected = isChecked);
  }

  
}