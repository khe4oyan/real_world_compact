class CPU {
	alu;
	cu;
	cache;
	
	constructor(alu, cu, cache) {
		this.alu = alu;
		this.cu = cu;
		this.cache = cache;
		
		console.log('CPU created');
	}
}