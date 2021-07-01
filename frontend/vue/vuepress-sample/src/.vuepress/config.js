module.exports = {
  themeConfig: {
    sidebar: ["/", "/about/"],
    sidebarDepth: 2,
    displayAllHeaders: true,
    nav: [
      { text: "Home", link: "/" },
      { text: "About", link: "/about/" },
      {
        text: "More",
        items: [
          { text: "Blog", link: "https://blog.70-10.net" },
          { text: "Twitter", link: "https://twitter.com/70_10" },
          { text: "GitHub", link: "https://github.com/70-10" }
        ]
      }
    ]
  }
};
