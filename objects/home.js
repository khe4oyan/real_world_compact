class Home{
	room;

	constructor(room_count) {
		this.room = [];
	
		for(let i = 0; i < room_count; ++i) {
			this.room.push(new Room());
		}

		console.log('Home created');
	}
}