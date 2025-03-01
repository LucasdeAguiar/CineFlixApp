export default class User extends Model {
  static table = "users";

  @field("name") name;
  @field("password") password;
}
