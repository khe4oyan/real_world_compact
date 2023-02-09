class People {
	name;
	surname;
	age;
	from_country;
	
	constructor(name, surname, age, from_country) {
		this.name = name;
		this.surname = surname;
		this.age = age;
		this.from_country = from_country;

		console.log('Person created');
	}
}