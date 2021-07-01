import React from "react";

export const Timeline = ({ children }) => (
  <div className="timeline">{children}</div>
);

export const TimelineHeader = ({ text }) => (
  <header className="timeline-header">
    <span className="tag is-medium is-info">{text}</span>
  </header>
);

export const TimelineItem = ({ date, children }) => (
  <div className="timeline-item">
    <div className="timeline-marker"></div>
    <div className="timeline-content">
      <p className="heading">{date}</p>
      {children}
    </div>
  </div>
);
