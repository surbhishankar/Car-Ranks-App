import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { Car } from './car';

@Injectable()
export class CarSearchService {
	constructor(private http: Http) { }

	search(term: string): Observable<Car[]> {
		return this.http
			.get(`api/cars/?name=${term}`)
			.map(response => response.json().data as Car[]);
	}
} 