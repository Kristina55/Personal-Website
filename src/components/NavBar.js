import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "../css/NavBar.css";

const ACTIVE_STYLE = {
  color: "gray"
};
class NavBar extends Component {
  render() {
    return (
      <nav>
        <div className="navBarStyle">
          <NavLink exact to="/" activeStyle={ACTIVE_STYLE}>
            Home
          </NavLink>

          <NavLink exact to="/about" activeStyle={ACTIVE_STYLE}>
            About
          </NavLink>

          <NavLink exact to="/projects" activeStyle={ACTIVE_STYLE}>
            Projects
          </NavLink>
        </div>
      </nav>
    );
  }
}

export default NavBar;
