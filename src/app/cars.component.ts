import { Component, OnInit } from '@angular/core';
import { Router }   from '@angular/router';

import { Car } from './car';
import { CarService } from './car.service';

@Component({
  selector: 'my-carss',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css'],
  providers: [CarService]
})

export class CarsComponent implements OnInit {
  title = 'Tour of Cars';
  cars: Car[];
  selectedCar: Car;
 
  constructor(
    private router: Router,
	private carService: CarService) { }
 
  getCars(): void {
    this.carService.getCars().then(cars => this.cars = cars);
  }
 
  ngOnInit(): void {
    this.getCars();
  }
 
  onSelect(car: Car): void {
    this.selectedCar = car;
  }

  gotoDetail(): void {
  	this.router.navigate(['/detail', this.selectedCar.id]);
  }

  add(name: string): void {
  	name = name.trim();
  	if(!name) { return; }
  	this.carService.create(name)
  		.then(car => {
  			this.cars.push(car);
  			this.selectedCar = null;
  		});
  }

  delete(car: Car): void {
  	this.carService
  		.delete(car.id)
  		.then(() => {
  			this.cars = this.cars.filter(h => h !== car);
  			if (this.selectedCar === car) { this.selectedCar = null; }
  		});
  }
}
