import { Component } from "react";
import "../styles/app.scss";
import bulmaCarousel from "bulma-carousel";

export default class extends Component {
  componentDidMount() {
    bulmaCarousel.attach();
  }
  render() {
    return (
      <div>
        <div className="columns">
          <div className="column">
            <div
              className="carousel carousel-animated carousel-animate-fade"
              data-autoplay="true"
              style={{
                maxHeight: "680px"
              }}
            >
              <div className="carousel-container">
                <div className="carousel-item has-background is-active">
                  <img
                    className="is-background"
                    src="https://wikiki.github.io/images/merry-christmas.jpg"
                    alt=""
                    width="640"
                    height="310"
                  />
                </div>
                <div className="carousel-item has-background">
                  <img
                    className="is-background"
                    src="https://wikiki.github.io/images/singer.jpg"
                    alt=""
                    width="640"
                    height="310"
                  />
                </div>
                <div className="carousel-item has-background">
                  <img
                    className="is-background"
                    src="https://wikiki.github.io/images/sushi.jpg"
                    alt=""
                    width="640"
                    height="310"
                  />
                </div>
                <div className="carousel-item has-background">
                  <img
                    className="is-background"
                    src="https://wikiki.github.io/images/life.jpg"
                    alt=""
                    width="640"
                    height="310"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <section className="hero is-fullheight">
          <div className="hero-body">
            <div className="container">
              <div className="container">
                <div className="h1">title</div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
