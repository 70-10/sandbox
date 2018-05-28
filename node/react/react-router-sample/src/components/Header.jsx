import React from "react";
import { Link } from "react-router-dom";

const imageStyle = {
  maxHeight: "60px"
};

export default () => (
  <header className="navbar">
    <div className="container">
      <div className="navbar-brand">
        <Link to="/" className="navbar-item">
          <img src="http://via.placeholder.com/200x100" style={imageStyle} />
        </Link>
      </div>
    </div>
  </header>
);
