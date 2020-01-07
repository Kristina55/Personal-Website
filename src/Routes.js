import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import About from "./components/About";
import Projects from "./components/Projects";
import NavBar from "./components/NavBar";

class Routes extends Component {
  render() {
    return (
      <div>
        {/* Here i need to use maybe Browser Router */}
        <NavBar />
        <Switch>
          <Route exact path="/" render={() => <HomePage />} />
          <Route exact path="/about" render={() => <About />} />
          <Route exact path="/projects" render={() => <Projects />} />
        </Switch>
      </div>
    );
  }
}

export default Routes;
