class Storage{
	storage; // []
	constructor() {
		this.storage = [];
		console.log('Storage created');
	}

	add(obj) {
		this.storage.push(obj);
	}
}