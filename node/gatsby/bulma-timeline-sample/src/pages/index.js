import React from "react";
import "./index.scss";

import { Timeline, TimelineHeader, TimelineItem } from "../components/timeline";

export default () => (
  <>
    <section className="section">
      <div className="container">
        <h1 className="title">Timeline sample</h1>
        <Timeline>
          <TimelineItem date="2019/09/30">sample</TimelineItem>
          <TimelineItem date="2019/09/29">sample2</TimelineItem>
          <TimelineHeader text="2019"></TimelineHeader>
          <TimelineItem date="2018/09/29">sample</TimelineItem>
          <TimelineHeader text="2018"></TimelineHeader>
        </Timeline>
      </div>
    </section>
  </>
);
