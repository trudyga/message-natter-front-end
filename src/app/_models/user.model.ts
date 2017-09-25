import ProfileModel from "./profile.model";

export default class UserModel {
  public id;
  public username;
  public email;
  public strategy;
  public profile: ProfileModel;


  constructor(user) {
    this.id = user.id;
    this.username = user.username;
    this.email = user.email;
    this.strategy = user.strategy;
    this.profile = user.profile;
  }
}
