import { User } from "./user";

export interface IUserRepository {
  findUser(id: number): User;
}

export class UserRepository implements IUserRepository {
  findUser(id: number) {
    return new User(id, "test user");
  }
}
