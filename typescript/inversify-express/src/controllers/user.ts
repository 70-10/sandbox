import { Request, Response } from "express";
import {
  controller,
  interfaces,
  httpGet,
  httpPost,
  request,
  response
} from "inversify-express-utils";
import { inject } from "inversify";
import { UserService } from "../services/user";

@controller("/users")
export class UserController implements interfaces.Controller {
  constructor(@inject("UserService") private userService: UserService) {}

  @httpGet("/")
  public getUsers(@request() req: Request, @response() res: Response) {
    const users = this.userService.findAll();
    return res.json({ users });
  }

  @httpGet("/:id")
  public getUser(@request() req: Request, @response() res: Response) {
    const user = this.userService.findById(req.params.id);
    if (!user) {
      return res.status(404).end();
    }
    return user;
  }

  @httpPost("/")
  public create(@request() req: Request, @response() res: Response) {
    return this.userService.create(req.body);
  }
}
