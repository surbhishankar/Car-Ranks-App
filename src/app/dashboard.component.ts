import { Component, OnInit } from '@angular/core';

import { Car } from './car';
import { CarService } from './car.service';

@Component({
	selector: 'my-dashboard',
	templateUrl: './dashboard.component.html',
	styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent implements OnInit { 
	cars: Car[] = [];

	constructor(private carService: CarService) { }

	ngOnInit(): void {
		this.carService.getCars()
			.then(cars => this.cars = cars.slice(1, 5));
	}
}