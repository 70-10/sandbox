import { GetterTree } from "vuex";
import { RootState } from "store";

export const name = "authenticate";
export interface User {}
export interface State {
  user: User;
}

export const namespaced = true;

export const state = (): State => ({
  user: {}
});

export const getters: GetterTree<State, RootState> = {
  isAuth: state => !!state.user
};
