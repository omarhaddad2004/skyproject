import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';  

import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { ProfpageComponent } from './profpage/profpage.component';
import { VecpageComponent } from './vecpage/vecpage.component';
import { Vecpage2Component } from './vecpage/vecpage2.component';  // Import Vecpage2Component
import { routes } from './app.routes';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    ProfpageComponent,
    VecpageComponent,
    Vecpage2Component   // Add Vecpage2Component here
  ],
  imports: [
    BrowserModule,               // Correct to use BrowserModule in root module
    RouterModule.forRoot(routes), // Routing setup
    FormsModule,                  // Required for two-way data binding
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
