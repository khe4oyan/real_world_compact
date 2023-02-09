new Algae();
new ALU();
new Anchor();
new Bed(new Pillow(), new Mattres(), new Sheet(), new Duvet_cover());
new Bondage();
new CPU(new ALU(), new CU(), new Cache());
new CU();
new Cache();
{
	let whs = [];
	let sits = [];
	let drs = [];
	
	for (let i = 0; i < 4; ++i) {
		whs.push(new Wheel());
		sits.push(new Sitter());
		drs.push(new Door());
	}
	new Car('Opel', new Engine(), whs, new Control_wheel(), sits, drs);
}
new Chair();
new Country('Armenia');
new City('Erevan');
new Region('Avan');
new Control_wheel();
new Coral();
new Desk_lump();
new Door();
new Duvet_cover();
{
	let keys = [];
	for (let i = 0; i < 10; ++i) {
		keys.push(new Key(i + 1));
	}
	new Elevator(new Door(), keys);
}
new Engine();
new Fish();
{
	{
		let homes = [];
		for (let i = 0; i < 3; ++i) {
			homes.push(new Home(1 + Math.floor(Math.random() * 5)));
		}
		new Floor(homes);
	}
	new Float();
}
new GPU(new RAM(8));
new HD(200);
{
	let storage = new Storage();
	let garage = new Garage(storage);
	let home = new Home(1 + Math.floor(Math.random() * 5));

	new House(home, garage);
}
new Key(1);
{
	let keys = [];
	for (let i = 0; i < 100; ++i) {
		keys.push(new Key(i));
	}
	new Keyboard(keys);
}
new RAM(8);
new Room();
new Monitor(1920, 1700);
new OS('Linux');
new Plata(new RAM(8), new CPU(new ALU(), new CU, new Cache()), new HD(150), null);
{
	let plata = new Plata(new RAM(8), new CPU(new ALU(), new CU, new Cache()), new HD(150), null);

	let keys = [];
	for (let i = 0; i < 10; ++i) {
		keys.push(new Key(i));
	}
	let keyboard = new Keyboard(keys);
	new PC(plata, keyboard, new Monitor(800, 700), new Mouse(), new OS('Mac'));
}
new Ship(new Sail(), new Anchor());
new Submarine(new Radar(), new Rocket());
new Ocean('Atlantic');
new Mainland('Europe');
{
	let mainlands = [];
	let oceans = [];

	for (let i = 0; i < 3; ++i) {
		oceans.push(new Ocean(`ocean_${i}`));
	}

	for (let i = 0; i < 10; ++i) {
		mainlands.push(new Mainland(`mainland_${i}`));
	}
	new Planet('Earth', mainlands, oceans);
}
{
	const country = new Country('USA');
	new People('Alex', 'Markirovich', 68, country);
}