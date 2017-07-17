import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { RouterModule }   from '@angular/router';
import { HttpModule }   from '@angular/http';

import { InMemoryWebApiModule }   from 'angular-in-memory-web-api';
import { InMemoryDataService }   from './in-memory-data-service';

import { AppComponent }        from './app.component';
import { CarDetailComponent } from './car-detail.component';
import { CarSearchComponent } from './car-search.component';
import { DashboardComponent }  from './dashboard.component';
import { CarsComponent }     from './cars.component';
import { CarService }         from './car.service';
import { AboutAuthorComponent } from './aboutme.component';

import { AppRoutingModule }  from './app-routing.module';


@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService),
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    CarDetailComponent,
    DashboardComponent,
    CarsComponent,
    CarSearchComponent,
    AboutAuthorComponent
  ],
  providers: [
    CarService
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule {
}