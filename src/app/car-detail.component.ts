import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap }   from '@angular/router';
import { Location }   from '@angular/common';
import 'rxjs/add/operator/switchMap';

import { CarService } from './car.service';
import { Car } from './car';

@Component({
	selector: 'car-detail',
	templateUrl: './car-detail.component.html',
	styleUrls: ['./car-detail.component.css']
})

export class CarDetailComponent implements OnInit {
	car: Car;

	constructor (
		private carService: CarService,
		private route: ActivatedRoute,
		private location: Location
	) { }

	ngOnInit(): void {
		this.route.paramMap
			.switchMap((params: ParamMap) => this.carService.getCar(+params.get('id')))
			.subscribe(car => this.car = car);
	}

	goBack(): void {
		this.location.back();
	}

	save(): void {
		this.carService.update(this.car)
			.then(() => this.goBack());
	}
}
