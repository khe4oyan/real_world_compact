class Plata {
	ram;
	cpu;
	hd;
	gpu;

	constructor(ram, cpu, hd, gpu = null) {
		this.ram = ram;
		this.cpu = cpu;
		this.hd = hd;
		this.gpu = gpu;
		
		console.log('Plata created');
	}
}