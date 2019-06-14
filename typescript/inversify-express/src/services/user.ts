import { injectable, inject } from "inversify";
import { UserRepository } from "../repositories/user";
import { IUser } from "../entities/user";

@injectable()
export class UserService {
  constructor(
    @inject("UserRepository") private userRepository: UserRepository
  ) {}

  public findAll(): IUser[] {
    return this.userRepository.findAll();
  }

  public findById(id: string): IUser | undefined {
    return this.userRepository.findById(id);
  }

  public create(user: IUser): IUser {
    return this.userRepository.create(user);
  }
}
