export const Type = {
  Menu: {
    Toggle: "@next-static/menu/toggle",
    Open: "@next-static/menu/open",
    Close: "@next-static/menu/close"
  },
  Router: {
    Push: "@next-static/router/push"
  }
};

export const Creator = {
  Menu: {
    toggle() {
      return { type: Type.Menu.Toggle };
    },
    open() {
      return { type: Type.Menu.Open };
    },
    close() {
      return { type: Type.Menu.Close };
    }
  },
  Router: {
    push(path) {
      return { type: Type.Router.Push, path };
    }
  }
};
