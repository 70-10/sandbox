import { auth, GoogleAuthProvider } from "./firebase";

export default {
  isAuthenticated: false,
  async checkAuth() {
    const user = await authenticate();
    this.user = user;
    this.isAuthenticated = user ? true : false;
    return this.isAuthenticated;
  },
  authenticate() {
    const provider = new GoogleAuthProvider();
    auth.signInWithRedirect(provider);
  },
  async signout() {
    await auth.signOut();
    this.isAuthenticated = false;
  }
};

function authenticate() {
  return new Promise(resolve => auth.onAuthStateChanged(resolve));
}
