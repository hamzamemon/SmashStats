class Character {
  constructor(data) {
    this.name = data.name;

    this.normals = {};
    Object.entries(data.normals).map(([key, value]) => {
      this.normals[key] = value;
    });
    
    this.aerials = {};
    Object.entries(data.aerials).map(([key, value]) => {
      this.aerials[key] = value;
    });

    this.specials = {};
    Object.entries(data.specials).map(([key, value]) => {
      this.specials[key] = value;
    });

    this.grabsThrows = {};
    Object.entries(data.grabsThrows).map(([key, value]) => {
      this.grabsThrows[key] = value;
    });

    this.misc = {};
    Object.entries(data.misc).map(([key, value]) => {
      this.misc[key] = value;
    });
  }


}

export default Character;
