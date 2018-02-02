import React from "react";
import FilterLink from "../containers/FilterLink";
import { FilterTypes } from "../common";

const Footer = () => (
  <p>
    Show: <FilterLink filter={FilterTypes.All}>All</FilterLink>
    {", "}
    <FilterLink filter={FilterTypes.Active}>Active</FilterLink>
    {", "}
    <FilterLink filter={FilterTypes.Completed}>Completed</FilterLink>
  </p>
);

export default Footer;
