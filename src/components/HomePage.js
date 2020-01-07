import React, { Component } from "react";
import "../App.css";
import { Link } from "react-router-dom";

class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      theme: "light"
    };
    this.toggleTheme = this.toggleTheme.bind(this);
  }
  toggleTheme() {
    const theme = this.state.theme === "light" ? "dark" : "light";
    document.documentElement.classList.add("color-theme-in-transition");
    this.setState({ theme });
    document.documentElement.setAttribute("data-theme", theme);
    window.setTimeout(() => {
      document.documentElement.classList.remove("color-theme-in-transition");
    }, 1000);
  }
  render() {
    return (
      <div className="home-page-background">
        <div id="background" />
        <div id="home-content" className="animated fadeInUp ">
          <p>HELLO.</p>
          <p className="homepage-description">
            My name is Kristina. I'm Front End Developer <br /> focused on
            creating clean & user-friendly experiences.
          </p>
          <div className="homepage-div-button">
            <Link to="projects" className="homepage-button">
              Check my work
              {/* <button ">Check my work</button> */}
            </Link>
          </div>
          <button className="header-button" onClick={this.toggleTheme}>
            <i>Change theme</i>
          </button>
        </div>
      </div>
    );
  }
}

export default HomePage;
