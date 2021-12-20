import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TicketReservationComponent } from './ticket-reservation/ticket-reservation.component';
import { TestingStringsArraysComponent } from './testing-strings-arrays/testing-strings-arrays.component';

@NgModule({
  declarations: [
    AppComponent,
    TicketReservationComponent,
    TestingStringsArraysComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
