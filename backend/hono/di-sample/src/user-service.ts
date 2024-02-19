import { User } from "./user";
import { IUserRepository } from "./user-repository";

export interface IUserService {
  getUser(id: number): User;
}

export class UserService implements IUserService {
  constructor(private userRepository: IUserRepository) {}

  getUser(id: number) {
    return this.userRepository.findUser(id);
  }
}
