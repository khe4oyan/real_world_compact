class Car{
	firm_name;
	engine;
	wheels; // []
	control_wheel;
	sitters; // []
	doors; // []

	constructor(firm_name, engine, wheel, control_wheel, sitter, door) {
		this.firm_name = firm_name;
		this.engine = engine;
		this.wheels = wheel;
		this.control_wheel = control_wheel;
		this.sitters = sitter;
		this.doors = door;

		console.log(`Car ${this.firm_name} created`);
	}
}