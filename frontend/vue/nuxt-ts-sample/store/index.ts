import { ModuleTree } from "vuex";
import * as auth from "./modules/auth";
import * as root from "./root";

export type RootState = root.State;

export const modules: ModuleTree<RootState> = {
  [auth.name]: auth
};
