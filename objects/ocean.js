class Ocean{
	in_ocean; // Map()
	static id = 1;

	constructor() {
		this.in_ocean = new Map();

		console.log('Ocean created');
	}

	add(obj) {
		const id_ticket = Ocean.id++;
		this.in_ocean.set(id_ticket, obj);

		return id_ticket;
	}

	remove(id_ticket) {
		const obj = this.in_ocean.get(id_ticket);
		this.in_ocean.remove(id_ticket);
		
		return obj;
	}
}