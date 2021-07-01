import "../styles/app.scss";

export default () => (
  <div className="timeline">
    <header className="timeline-header">
      <span className="tag is-medium is-primary">Start</span>
    </header>
    <div className="timeline-item">
      <div className="timeline-marker" />
      <div className="timeline-content">
        <p className="heading">January 2016</p>
        <div className="content">
          <p>Timeline content - Can include any HTML element</p>
          <figure className="image is-16by9">
            <img src="https://via.placeholder.com/640x360" alt="" />
          </figure>
        </div>
      </div>
    </div>
    <div className="timeline-item">
      <div className="timeline-marker is-image is-32x32">
        <img src="https://via.placeholder.com/32x32" />
      </div>
      <div className="timeline-content">
        <p className="heading">February 2016</p>
        <p>Timeline content - Can include any HTML element</p>
      </div>
    </div>
    <header className="timeline-header">
      <span className="tag is-primary">2017</span>
    </header>
    <div className="timeline-item">
      <div className="timeline-marker is-icon">
        <i className="fa fa-flag" />
      </div>
      <div className="timeline-content">
        <p className="heading">March 2017</p>
        <p>Timeline content - Can include any HTML element</p>
      </div>
    </div>
    <div className="timeline-header">
      <span className="tag is-medium is-primary">End</span>
    </div>
  </div>
);
