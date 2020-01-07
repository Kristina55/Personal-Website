import React, { Component } from "react";
import "../css/Projects.css";

class Card extends Component {
  render() {
    if (this.props.name === "Jobly" || this.props.name === "Lunchly") {
      return (
        <div className="col-sm-4">
          <div>
            <a href="#Front-BackEnd">
              <h1 className="project-name">{this.props.name}</h1>
            </a>
            <video className="video" width="418" height="300" controls>
              <source src={this.props.video} type="video/mp4" />
            </video>
          </div>
          <div className="project-description">{this.props.description}</div>
        </div>
      );
    } else {
      return (
        <div className="col-sm-4">
          <div>
            <a href="#FrontEnd">
              <h1 className="project-name">{this.props.name}</h1>
            </a>
            <video className="video" width="418" height="300" controls>
              <source src={this.props.video} type="video/mp4" />
            </video>
          </div>
          <div className="project-description">{this.props.description}</div>
        </div>
      );
    }
  }
}

export default Card;
