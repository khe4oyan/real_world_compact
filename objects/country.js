class Country{
	country_name;
	cities; // []

	constructor(country_name) {
		this.country_name = country_name;
		this.cities = [];

		console.log(`Country ${this.country_name} created`);
	}
	
	add_city(obj) {
		this.cities.push(obj);
	}
}