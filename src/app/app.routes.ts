import { Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { ProfpageComponent } from './profpage/profpage.component';
import { VecpageComponent } from './vecpage/vecpage.component';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },  // Redirect root URL to 'home'
  { path: 'home', component: HomepageComponent },
  { path: 'profiles', component: ProfpageComponent },
  { path: 'reports', component: VecpageComponent },     // Route for reports (VecpageComponent)
  { path: 'view-more', component: VecpageComponent },   // Additional route for "View More"
  { path: '**', redirectTo: 'home', pathMatch: 'full' } // Redirect any unknown paths to home
];
