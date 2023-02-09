class Planet{
	planet_name;
	mainlands; // []
	oceans; // []

	constructor(planet_name, mainlands, oceans) {
		this.planet_name = planet_name;
		this.mainlands = mainlands;
		this.oceans = oceans; 
		console.log('Planet created');
	}
}