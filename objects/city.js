class City{
	city_name;
	in_city; // []
	
	constructor(city_name) {
		this.city_name = city_name;
		this.in_city = [];

		console.log(`City ${this.city_name} created`);
	}

	add(obj) {
		this.in_city.push(obj);
	}
}