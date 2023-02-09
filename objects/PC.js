class PC {
	plata;
	keyboard;
	monitor;
	mouse;
	os;
	
	constructor(plata, keyboard, monitor, mouse, os) {
		this.plata = plata;
		this.keyboard = keyboard;
		this.monitor = monitor;
		this.mouse = mouse;
		this.os = os;
		
		console.log('PC created');
	}
}