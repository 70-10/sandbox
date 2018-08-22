import { Component } from "react";
import "../styles/app.scss";
import bulmaCarousel from "bulma-carousel";

export default class extends Component {
  componentDidMount() {
    bulmaCarousel.attach();
  }
  render() {
    return (
      <section className="hero is-fullheight has-carousel">
        <div
          className="hero-carousel carousel-animated carousel-animate-slide"
          data-autoplay="true"
        >
          <div className="carousel-container">
            <div className="carousel-item has-background">
              <img
                className="is-background"
                src="https://wikiki.github.io/images/merry-christmas.jpg"
                alt=""
              />
            </div>
            <div className="carousel-item has-background">
              <img
                className="is-background"
                src="https://wikiki.github.io/images/singer.jpg"
                alt=""
              />
            </div>
            <div className="carousel-item has-background">
              <img
                className="is-background"
                src="https://wikiki.github.io/images/sushi.jpg"
                alt=""
              />
            </div>
            <div className="carousel-item has-background is-active">
              <img
                className="is-background"
                src="https://wikiki.github.io/images/life.jpg"
                alt=""
              />
            </div>
          </div>
          {/* <div className="carousel-navigation is-overlay">
        <div className="carousel-nav-left">
          <i className="fa fa-chevron-left" aria-hidden="true" />
        </div>
        <div className="carousel-nav-right">
          <i className="fa fa-chevron-right" aria-hidden="true" />
        </div>
      </div> */}
        </div>
        <div className="hero-head">
          <nav className="navbar is-transparent">
            <div className="container">
              <div className="navbar-brand">
                <a className="navbar-item">
                  <img
                    src="https://bulma.io/images/bulma-type-white.png"
                    alt="Logo"
                  />
                </a>
                <span
                  className="navbar-burger burger"
                  data-target="navbarMenuHeroA"
                >
                  <span />
                  <span />
                  <span />
                </span>
              </div>
              <div id="navbarMenuHeroA" className="navbar-menu">
                <div className="navbar-end">
                  <a className="navbar-item has-text-white is-active">Home</a>
                  <a className="navbar-item has-text-white">Examples</a>
                  <a className="navbar-item has-text-white">Documentation</a>
                  <span className="navbar-item has-text-white">
                    <a className="button is-primary is-inverted">
                      <span className="icon">
                        <i className="fa fa-github" />
                      </span>
                      <span>Download</span>
                    </a>
                  </span>
                </div>
              </div>
            </div>
          </nav>
        </div>
        <div className="hero-body ">
          <div className="container has-text-centered">
            <div className="columns is-mobile is-centered">
              <div className="column is-half is-narrow">
                <div className="field has-addons">
                  <div className="control is-expanded">
                    <input
                      className="input"
                      type="text"
                      placeholder="Find a repository"
                    />
                  </div>
                  <div className="control">
                    <a className="button is-info">Search</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="hero-foot">
          <nav className="tabs is-boxed is-fullwidth">
            <div className="container">
              <ul>
                <li className="is-active">
                  <a>Overview</a>
                </li>
                <li>
                  <a className="has-text-white">Modifiers</a>
                </li>
                <li>
                  <a className="has-text-white">Grid</a>
                </li>
                <li>
                  <a className="has-text-white">Elements</a>
                </li>
                <li>
                  <a className="has-text-white">Components</a>
                </li>
                <li>
                  <a className="has-text-white">Layout</a>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </section>
    );
  }
}
