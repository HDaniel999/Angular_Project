import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// other imports
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ListComponent } from './list/list.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, //Added
    HttpClientModule //Added
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
