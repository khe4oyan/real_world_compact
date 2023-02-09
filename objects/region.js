class Region{
	region_name;
	in_region; // []

	constructor(region_name) {
		this.region_name = region_name;

		console.log('Region created');
	}

	add(obj) {
		this.in_region.push(obj);
	}
}