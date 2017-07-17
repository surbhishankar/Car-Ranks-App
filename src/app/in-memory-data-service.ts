import { InMemoryDbService }   from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
	createDb() {
		const cars = [
			{ 
				id: 1, 
				name: 'McLaren P1 LM', 
				content: 'Price: $3.7 million, Engine: 3.8-liter twin-turbo V-8, Horse Power: 1000HP, Top Speed: 217MPH' 
			},
			{ 
				id: 2, 
				name: 'Lykan HyperSport', 
				content: 'Price: $3.4 million, Engine: twin-turbo 3.8-liter flat-six boxer, Horse Power: 780HP, Top Speed: 240MPH ' 
			},
			{ 
				id: 3, 
				name: 'Lamborghini Veneno Roadster', 
				content: 'Price: $3.3 million, Engine: 6.5-liter V-12, Horse Power: 740HP, Top Speed: 221MPH ' 
			},
			{ 
				id: 4, 
				name: 'Aston Martin Valkyrie', 
				content: 'Price: $3 million, Engine: 6.5-liter, naturally-aspirated V-12, Horse Power: 1000HP, Top Speed: 250MPH ' 
			},
			{ 
				id: 5, 
				name: 'Ferrari Pininfarina Sergio', 
				content: 'Price: $3 million, Engine: naturally-aspirated 4.5-liter F136F  V-8, Horse Power: 597HP, Top Speed: 202MPH' 
			},
			{ 
				id: 6, 
				name: 'Pagani Huayra BC', 
				content: 'Price: $2.8 million, Engine: 6.0-liter V-12 bi-turbo, Horse Power: 790HP, Top Speed: 238MPH' 
			},
			{ 
				id: 7, 
				name: 'Bugatti Chiron', 
				content: 'Price: $2.6 million, Engine: quad-turbocharged W-16 8.0-liter, Horse Power: 1500HP, Top Speed: 268MPH' 
			},
			{ 
				id: 8, 
				name: 'McLaren P1 GTR', 
				content: 'Price: $2.59 million, Engine: 3.8-liter V-8, Horse Power: 1000HP, Top Speed: 225MPH' 
			},
			{ 
				id: 9, 
				name: 'Ferrari LaFerrari Aperta', 
				content: 'Price: $2.2 million, Engine: 6.3-liter Ferrari F140 V12, Horse Power: 1000HP, Top Speed: 217MPH' 
			},
			{ 
				id: 10, 
				name: 'Koenigsegg Regera', 
				content: 'Price: $1.9 million, Engine: 5.0-liter twin-turbo V8, Horse Power: 1100HP, Top Speed: 255MPH' 
			}
		];
		return {cars};
	}
}