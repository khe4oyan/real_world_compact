class Mainland{
	mainland_name;
	in_mainland;

	constructor(mainland_name) {
		this.mainland_name = mainland_name;
		this.in_mainland = [];
		console.log('Mainland created');
	}

	add(obj) {
		this.in_mainland.push(obj);
	}
}