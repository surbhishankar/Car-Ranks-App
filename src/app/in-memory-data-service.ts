import { InMemoryDbService }   from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
	createDb() {
		const cars = [
			{ id: 0, name: 'Zero', content:'Test Content 0' },
			{ id: 1, name: 'Spiderman', content: 'Test Content 1' },
			{ id: 2, name: 'Batman', content: 'Test Content 2' },
			{ id: 3, name: 'Wolverine', content: 'Test Content 3' },
			{ id: 4, name: 'Ironman', content: 'Test Content 4' },
			{ id: 5, name: 'Flash', content: 'Test Content 5' },
			{ id: 6, name: 'Arrow', content: 'Test Content 6' },
			{ id: 7, name: 'Antman', content: 'Test Content 7' },
			{ id: 8, name: 'Avatar', content: 'Test Content 8' },
			{ id: 9, name: 'Deadpool', content: 'Test Content 9' },
			{ id: 10, name: 'Thor', content: 'Test Content 10' }
		];
		return {cars};
	}
}