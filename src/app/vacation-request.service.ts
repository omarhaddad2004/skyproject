import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class VacationRequestService {
  data: { 
    name: string; 
    date?: string; 
    duration: string; 
    submittedDate: string;  // Date format should be correct
    salary: number; 
    image: string; 
    selected: boolean 
  }[] = [
    {
      name: 'jack haddad',
      submittedDate: '2024-07-23',  // Correct date format
      duration: '2 Weeks (1/4/2023 - 14/4/2023)',
      salary: 1000,
      image: 'https://wpuploads.appadvice.com/wp-content/uploads/2014/10/facebookanon.jpg',
      selected: false
    },
    {
      name: 'ahmad haddad',
      submittedDate: '2024-07-88',  // Correct date format
      duration: '2 Weeks (1/4/2023 - 14/4/2023)',
      salary: 1000,
      image: 'https://wpuploads.appadvice.com/wp-content/uploads/2014/10/facebookanon.jpg',
      selected: false
    },
    {
      name: 'jack haddad',
      submittedDate: '2024-09-99',
      duration: '2 Weeks (1/4/2023 - 14/4/2023)',
      salary: 1000,
      image: 'https://wpuploads.appadvice.com/wp-content/uploads/2014/10/facebookanon.jpg',
      selected: false
    },
    {
      name: 'jack haddad',
      submittedDate: '2024-12-13',
      duration: '2 Weeks (1/4/2023 - 14/4/2023)',
      salary: 1000,
      image: 'https://wpuploads.appadvice.com/wp-content/uploads/2014/10/facebookanon.jpg',
      selected: false
    },
    {
      name: 'lolo haddad',
      submittedDate: '2024-17-03',
      duration: '2 Weeks (1/4/2023 - 14/4/2023)',
      salary: 1000,
      image: 'https://wpuploads.appadvice.com/wp-content/uploads/2014/10/facebookanon.jpg',
      selected: false
    },
    {
      name: 'nedaa haddad',
      submittedDate: '2024-07-03',
      duration: '2 Weeks (1/4/2023 - 14/4/2023)',
      salary: 1000,
      image: 'https://wpuploads.appadvice.com/wp-content/uploads/2014/10/facebookanon.jpg',
      selected: false
    },
    {
      name: 'leen haddad',
      submittedDate: '2024-07-03',
      duration: '2 Weeks (1/4/2023 - 14/4/2023)',
      salary: 1000,
      image: 'https://wpuploads.appadvice.com/wp-content/uploads/2014/10/facebookanon.jpg',
      selected: false
    },
    {
      name: 'swsan haddad',
      submittedDate: '2024-07-03',
      duration: '2 Weeks (1/4/2023 - 14/4/2023)',
      salary: 1000,
      image: 'https://wpuploads.appadvice.com/wp-content/uploads/2014/10/facebookanon.jpg',
      selected: false
    },
    {
      name: '3bla haddad',
      submittedDate: '2024-07-03',
      duration: '2 Weeks (1/4/2023 - 14/4/2023)',
      salary: 1000,
      image: 'https://wpuploads.appadvice.com/wp-content/uploads/2014/10/facebookanon.jpg',
      selected: false
    },
    {
      name: 'mahmod haddad',
      submittedDate: '2024-07-03',
      duration: '2 Weeks (1/4/2023 - 14/4/2023)',
      salary: 1000,
      image: 'https://wpuploads.appadvice.com/wp-content/uploads/2014/10/facebookanon.jpg',
      selected: false
    },
    {
      name: 'jsara haddad',
      submittedDate: '2024-07-03',
      duration: '2 Weeks (1/4/2023 - 14/4/2023)',
      salary: 1000,
      image: 'https://wpuploads.appadvice.com/wp-content/uploads/2014/10/facebookanon.jpg',
      selected: false
    },
    {
      name: ' omarss haddad',
      submittedDate: '2024-07-03',
      duration: '2 Weeks (1/4/2023 - 14/4/2023)',
      salary: 1000,
      image: 'https://wpuploads.appadvice.com/wp-content/uploads/2014/10/facebookanon.jpg',
      selected: false
    },
    {
      name: 'zaid haddad',
      submittedDate: '2024-07-03',  // Correct date format
      duration: '2 Weeks (1/4/2023 - 14/4/2023)',
      salary: 1000,
      image: 'https://wpuploads.appadvice.com/wp-content/uploads/2014/10/facebookanon.jpg',
      selected: false
    },
    {
      name: 'Ahmad Ali',
      submittedDate: '2024-08-03',  // Correct date format
      duration: '2 Weeks (2/4/2023 - 15/4/2023)',
      salary: 1000,
      image: 'https://wpuploads.appadvice.com/wp-content/uploads/2014/10/facebookanon.jpg',
      selected: false
    },
    {
      name: 'moh Ali',
      submittedDate: '2024-08-03',  // Correct date format
      duration: '2 Weeks (2/4/2023 - 15/4/2023)',
      salary: 1000,
      image: 'https://wpuploads.appadvice.com/wp-content/uploads/2014/10/facebookanon.jpg',
      selected: false
    },
    {
      name: 'lklk haddad',
      submittedDate: '2024-07-03',
      duration: '2 Weeks (1/4/2023 - 14/4/2023)',
      salary: 1000,
      image: 'https://wpuploads.appadvice.com/wp-content/uploads/2014/10/facebookanon.jpg',
      selected: false
    },
    {
      name: 'jack haddad',
      submittedDate: '2024-07-03',
      duration: '2 Weeks (1/4/2023 - 14/4/2023)',
      salary: 1000,
      image: 'https://wpuploads.appadvice.com/wp-content/uploads/2014/10/facebookanon.jpg',
      selected: false
    },
    {
      name: 'mazen haddad',
      submittedDate: '2024-07-03',
      duration: '2 Weeks (1/4/2023 - 14/4/2023)',
      salary: 1000,
      image: 'https://wpuploads.appadvice.com/wp-content/uploads/2014/10/facebookanon.jpg',
      selected: false
    },
    {
      name: 'eman haddad',
      submittedDate: '2024-07-03',
      duration: '2 Weeks (1/4/2023 - 14/4/2023)',
      salary: 1000,
      image: 'https://wpuploads.appadvice.com/wp-content/uploads/2014/10/facebookanon.jpg',
      selected: false
    },
  ];

  constructor() {}

  getData() {
    console.log('Data from service:', this.data);  // Log to ensure data is being fetched
    return this.data;
  }

  updateData(updatedData: any[]) {
    this.data = updatedData;
  }
}
