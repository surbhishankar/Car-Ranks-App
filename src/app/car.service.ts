import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Car } from './car';

@Injectable()
export class CarService {

	private carsUrl = 'api/cars';
	

	constructor(private http: Http) { }

	getCars(): Promise<Car[]> {
		return this.http.get(this.carsUrl)
			.toPromise()
			.then(response => response.json().data as Car[])
			.catch(this.handleError);
	} 

	private handleError(error: any): Promise<any> {
		console.error('An error occured', error);
		return Promise.reject(error.message || error);
	}

	getCar(id: number): Promise<Car> {
		const url = `${this.carsUrl}/${id}`;
		return this.http.get(url)
		  .toPromise()
		  .then(response => response.json().data as Car)
		  .catch(this.handleError);
	}

	private headers = new Headers({'Content-Type': 'application/json'});

	update(car: Car): Promise<Car> {
		const url = `${this.carsUrl}/${car.id}`;
		return this.http
		  .put(url, JSON.stringify(car), {headers: this.headers})
		  .toPromise()
		  .then(() => car)
		  .catch(this.handleError);
	}

	create(name: string): Promise<Car> {
		return this.http
		.post(this.carsUrl, JSON.stringify({name: name}), {headers: this.headers})
		.toPromise()
		.then(res => res.json().data as Car)
		.catch(this.handleError);
	}

	delete(id: number): Promise<void> {
		const url = `${this.carsUrl}/${id}`;
		return this.http.delete(url, {headers: this.headers})
		  .toPromise()
		  .then(() => null)
		  .catch(this.handleError);
	}
}