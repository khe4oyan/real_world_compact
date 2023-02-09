class Room{
	in_room; // Map
	static id = 0;
	constructor() {
		console.log('Room created');
	}

	add(obj) {
		const id_ticket = Room.id++;
		this.in_room.set(id_ticket, obj);

		return id_ticket;
	}

	remove(id_ticket) {
		let obj = this.in_room.get(id_ticket);
		this.in_room.delete(id_ticket);

		return obj;
	}
}