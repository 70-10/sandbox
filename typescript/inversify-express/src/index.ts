import "reflect-metadata";
import bodyParser from "body-parser";
import { Container } from "inversify";
import { InversifyExpressServer } from "inversify-express-utils";
import { UserService } from "./services/user";
import "./controllers/user";
import { UserRepository } from "./repositories/user";

const container = new Container();

container.bind<UserRepository>("UserRepository").to(UserRepository);
container.bind<UserService>("UserService").to(UserService);

const server = new InversifyExpressServer(container);

server.setConfig(app => {
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(bodyParser());
});

const app = server.build();
app.listen(3000);
