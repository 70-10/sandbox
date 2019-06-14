import { injectable } from "inversify";
import { IUser } from "../entities/user";

@injectable()
export class UserRepository {
  private userStorage: IUser[] = [
    {
      email: "user1@example.com",
      name: "User1"
    },
    {
      email: "user2@example.com",
      name: "User2"
    }
  ];

  public findAll(): IUser[] {
    return this.userStorage;
  }

  public findById(id: string): IUser | undefined {
    return this.userStorage.find(user => user.name === id);
  }

  public create(user: IUser): IUser {
    this.userStorage.push(user);
    return user;
  }
}
