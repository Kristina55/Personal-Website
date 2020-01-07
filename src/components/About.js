import React, { Component } from "react";
import "../css/About.css";
// import shape from "../images/yellow-shape.svg";
import profileImage from "../images/profile-picture.png";
import linkedIn from "../images/linkedin-logo.svg";
import gitHubIcon from "../images/github-logo.svg";
import gmailIcon from "../images/gmail.svg";

class About extends Component {
  render() {
    return (
      <div>
        <div className="about-background">
          <div className="container">
            <div className="row height">
              <div className="col-md-6 animated fadeInUp d-flex align-items-center about-mobile">
                <h1 className="about-text">
                  About.
                  <p className="short-text">
                    <i className="custom-underline">
                      Short introduction about me.
                    </i>
                  </p>
                </h1>
              </div>

              <div className="col-md-6 text-style animated fadeInUp d-flex align-items-center">
                <div className="row">
                  <div className="col-md-12">
                    <div className="row">
                      <div className="col-md-5">
                        <div className="profile-image align-middle">
                          <img src={profileImage} alt="profileImage" />
                        </div>
                      </div>
                      <div className="col-md-7">
                        <h1 className="name-style ">
                          I'm Kristina Gjozev. I create impactful apps for
                          people with good ideas!
                        </h1>
                      </div>
                    </div>

                    <div className="row">
                      <p className=" col-md-12 description-style">
                        As a front-end web developer, I'm passionate and
                        knowledgable about both the visual and technical aspects
                        of creating an app. My mision is to bring more beauty,
                        creativity and highly innovative apps.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              {/* Yellow rectangle */}
              {/* <img
                src={shape}
                className="shape-image animated fadeInUp"
                alt="yellowShape"
              /> */}
            </div>
          </div>
        </div>
        <div>
          <ul className="social-media">
            <li>
              <a href="https://github.com/Kristina55">
                <img src={gitHubIcon} alt="gitHub" />
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/kristina-gjozev/">
                <img src={linkedIn} alt="linkedIn" />
              </a>
            </li>

            <li>
              <a href="mailto:kristina.gjozev@gmail.com">
                <img src={gmailIcon} alt="gmail" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
export default About;
