import { NgModule }              from '@angular/core';
import { RouterModule, Routes }   from '@angular/router';

import { DashboardComponent }  from './dashboard.component';
import { CarsComponent }     from './cars.component';
import { CarDetailComponent } from './car-detail.component';
import { AboutAuthorComponent } from './aboutme.component';

const routes: Routes = [
	{ path: '', redirectTo: 'dashboard', pathMatch: 'full' },
	{ path: 'dashboard',  component: DashboardComponent },
	{ path: 'detail/:id', component: CarDetailComponent },
	{ path: 'cars',     component: CarsComponent }
	{ path: 'aboutme',     component: AboutAuthorComponent }
]

@NgModule({
	imports: [ RouterModule.forRoot(routes) ],
	exports: [ RouterModule ]
})

export class AppRoutingModule {}