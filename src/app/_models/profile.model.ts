
export default class ProfileModel {
  public id: Number;
  public name: String;
  public surname: String;
  public birthDate: Date;
  public photo: String;
  public description: String;
  public country: String;
  public gender: String;

  constructor(profile) {
    this.id = profile.id;
    this.name = profile.name;
    this.surname = profile.surname;
    this.birthDate = profile.birthDate;
    this.photo = profile.photo;
    this.country = profile.country;
    this.gender = profile.gender ? profile.gender : 'none';
    this.description = profile.description ? profile.description : '';
  }

  get age() {
    let now = new Date();
    return new Date((+now) - (+this.birthDate));
  }

  get fullName() {
    return `${this.name} ${this.surname}`;
  }
}
