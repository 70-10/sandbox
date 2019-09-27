import React from "react";
import "./default.scss";
import { Navbar, NavbarBrand } from "react-bootstrap";

export default ({ children }) => (
  <>
    <Navbar bg="dark" variant="dark">
      <NavbarBrand>Samples</NavbarBrand>
    </Navbar>
    {children}
  </>
);
