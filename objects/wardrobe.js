class Wardrobe{
	in_wardrobe; // []
	constructor() {
		console.log('Wardrobe created');
	}

	add(cloth) {
		this.in_wardrobe.push(cloth);
	} 
}