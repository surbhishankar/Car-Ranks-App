import { Component, OnInit } from '@angular/core';
import { Router }   from '@angular/router';

import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

import 'rxjs/add/observable/of';

import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';

import { CarSearchService } from './car-search.service';
import { Car } from './car';

@Component({
  selector: 'car-search',
  templateUrl: './car-search.component.html',
  styleUrls: ['./car-search.component.css'],
  providers: [CarSearchService]
})

export class CarSearchComponent implements OnInit {
	cars: Observable<Car[]>;
	private searchTerms = new Subject<string>();

	constructor(
		private carSearchService: CarSearchService,
		private router: Router ) { }

	search(term: string): void {
		this.searchTerms.next(term);
	}

	ngOnInit(): void {
		this.cars = this.searchTerms
			.debounceTime(300)
			.distinctUntilChanged()
			.switchMap(term => term
				? this.carSearchService.search(term)
				: Observable.of<Car[]>([]))
			.catch(error => {
				console.log(error);
				return Observable.of<Car[]>([]);
			});
	}

	gotoDetail(car: Car): void {
		let link = ['/detail', car.id];
		this.router.navigate(link);
	}
}