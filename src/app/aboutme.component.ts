import { Component } from '@angular/core';

import { Car } from './car';
import { CarService } from './car.service';

@Component({
	selector: 'about-me',
	templateUrl: './aboutme.component.html',
	styleUrls: ['./aboutme.component.css'],
	providers: [CarService]
})

export class AboutAuthorComponent {
  title = 'Surbhi Shankar';
  cars: Car[];
}