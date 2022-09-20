import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <>
      <NavLink
        to="/"
        className={(nav) => (nav.isActive ? "nav-active" : "")}
      ></NavLink>

      <NavLink
        to="/Infos"
        className={(nav) => (nav.isActive ? "nav-active" : "")}
      ></NavLink>
    </>
  );
};

export default Navigation();
