import { DIContainer } from "./di-container";
import { IUserRepository, UserRepository } from "./user-repository";
import { IUserService, UserService } from "./user-service";

export interface DependencyTypes {
  UserRepository: IUserRepository;
  UserService: IUserService;
}

const diContainer = new DIContainer<DependencyTypes>();

// Register repositories
diContainer.register("UserRepository", UserRepository);

// Register services
diContainer.register(
  "UserService",
  UserService,
  diContainer.get("UserRepository"),
);

export { diContainer };
