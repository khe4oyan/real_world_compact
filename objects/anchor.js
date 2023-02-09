class Anchor{
	activated;
	constructor() {
		this.activated = false;
		console.log('Anchor created');
	}

	get status () {
		return (this.activated) ? 'downed' : 'upped';
	}

	down() {
		this.activated = true;
	}

	up() {
		this.activated = false;
	}
}