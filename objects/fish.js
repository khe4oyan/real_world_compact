class Fish{
	in_fish; // []
	constructor() {
		this.in_fish = [];
		console.log('Fish created');
	}

	eat(food) {
		this.in_fish.push(food);
	}
}