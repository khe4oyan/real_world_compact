class Key {
	key;
	presed;
	constructor(key) {
		this.key = key;
		console.log(`Key '${this.key}' created`);
	}

	get status() { return this.presed; }
	press() { this.presed = true; }
	unpress() { this.presed = false; }
}