import React, { Component } from "react";
import "../css/Projects.css";
import Card from "./Card";
import linkedIn from "../images/linkedin-logo.svg";
import gitHubIcon from "../images/github-logo.svg";
import gmailIcon from "../images/gmail.svg";
import projectsData from "../data/projects.js"
// import snackVideo from "../videos/snack-or-booze.mov";
// import restaurantsFinderVideo from "../videos/restaurants-finder.mov";
// import memoryGameVideo from "../videos/memoryGame.mov";
// import Jobly from "../videos/Jobly.mov";
// import Lunchly from "../videos/Lunchly.mov";

class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = {
      theme: "dark",
      // projects: [
      //   {
      //     name: "Snack Or Booze",
      //     description: `Welcome to my Silicon Valley cafe! You can choose your snack or drink, you can see the recipe how is it exactly made and how it is served. Also if you want you can add your favorite snack or drink to my cafe, so my list of choices will become bigger. To create this lovely application I was using React.js and Context API.`,
      //     video: snackVideo
      //   },
      //   {
      //     name: "Restaurants Finder",
      //     description:
      //       "This app is made with love and passion. I'm a food lover who wants to help people to find the best restaurants in San Francisco. Sorted by categories such as: Trending this week, Weekend Brunches, Gluten-Free food and more. Also users can search for certain, favorite cuisine. Restaurants Finder is an app made with React.js while using Zomato API.",
      //     video: restaurantsFinderVideo
      //   },
      //   {
      //     name: "Memory Game",
      //     description:
      //       "I've build this project as part of my Bootcamp pre-work. It was really fun and challenging at the same time to build something from scratch. This game is a basic matching game to test the player's memory. In a deck of paired cards, the player needs to match each pair to win the game. It's build with HTML/CSS and JavaScript.",
      //     video: memoryGameVideo
      //   }
      // ],
      // lowerProjects: [
      //   {
      //     name: "Jobly",
      //     description:
      //       "This is my first full-stack application built from scratch. Jobly allows users to search for companies, the job postings of each company and also they have the ability to apply for the wanted job. It's amazing how everything fits together perfectly. I've built this app using PostreSQL database, Node.js, Express and React.js ",
      //     video: Jobly
      //   },
      //   {
      //     name: "Lunchly",
      //     description:
      //       "Lunchly is a full-stack app where there is a list of reservations for restaurant customers. You can add new customer and make reservation including date and time, table for how many quests and small notes. I've built this app with Node.js and Express server while using PostgreSQL database for storing all the customer reservations.",
      //     video: Lunchly
      //   }
      // ]
    };
  }
  render() {
    const projects = projectsData.map((item, i) => (
      <Card
        video={item.video}
        key={i}
        img={item.background}
        name={item.name}
        url={item.url}
        description={item.description}
      />
    ));
    // const lowerProjects = this.state.lowerProjects.map((item, i) => (
    //   <Card
    //     video={item.video}
    //     key={i}
    //     img={item.background}
    //     name={item.name}
    //     url={item.url}
    //     description={item.description}
    //   />
    // ));

    return (
      <div>
        <div className="projects-background">
          <div className="projects-style animated fadeInUp">
            <h1>Projects.</h1>

            <h2 className="short-text">
              <i className="custom-underline">
                A selection of my favorite projects.
              </i>
            </h2>
            <h3 className="short-text">
              <i className="custom-underline">More coming soon...</i>
            </h3>
          </div>

          <div className="container-fluid">
            <div className="row" id="FrontEnd">
              {projects}
            </div>
            {/* <div className="row" id="Front-BackEnd">
              {lowerProjects}
            </div> */}
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
                <img src={linkedIn} alt="linkedin" />
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

export default Projects;
