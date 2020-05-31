class Character {
	constructor(data, game) {
		this.name = data.name;
		this.formattedName = this.name
			.toLowerCase()
			.replace(/\./g, '')
			.replace(/ /g, '_')
			.replace(/&/g, 'and');
		this.game = game;

		this.normals = {};
		for (const [key, value] of Object.entries(data.normals)) {
			this.normals[key] = value;
		}

		this.aerials = {};
		for (const [key, value] of Object.entries(data.aerials)) {
			this.aerials[key] = value;
		}

		this.specials = {};
		for (const [key, value] of Object.entries(data.specials)) {
			this.specials[key] = value;
		}

		this.grabsThrows = {};
		for (const [key, value] of Object.entries(data.grabsThrows)) {
			this.grabsThrows[key] = value;
		}

		this.misc = {};
		for (const [key, value] of Object.entries(data.misc)) {
			this.misc[key] = value;
		}
	}
}

export default Character;
