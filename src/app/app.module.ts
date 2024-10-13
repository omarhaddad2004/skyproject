import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';  

import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { ProfpageComponent } from './profpage/profpage.component';
import { VecpageComponent } from './vecpage/vecpage.component';
import { routes } from './app.routes';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    ProfpageComponent,
    VecpageComponent
  ],
  imports: [
    BrowserModule,             // Only BrowserModule is needed here, not CommonModule
    RouterModule.forRoot(routes),  // Routing setup
    FormsModule,                // Include this if you're using forms and ngModel
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
