import { Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { ProfpageComponent } from './profpage/profpage.component';
import { VecpageComponent } from './vecpage/vecpage.component';
import { Vecpage2Component } from './vecpage/vecpage2.component';  // Import Vecpage2Component

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },  // Redirect root to 'home'
  { path: 'home', component: HomepageComponent },
  { path: 'profiles', component: ProfpageComponent },
  { path: 'reports', component: VecpageComponent },     // First page
  { path: 'view-more', component: Vecpage2Component },  // Second page
  { path: '**', redirectTo: 'home' }                    // Redirect invalid paths to 'home'
];
