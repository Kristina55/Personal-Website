import snackVideo from "../videos/snack-or-booze.mov";
import restaurantsFinderVideo from "../videos/restaurants-finder.mov";
import memoryGameVideo from "../videos/memoryGame.mov";
import Jobly from "../videos/Jobly.mov";
import Lunchly from "../videos/Lunchly.mov";
import Zen from "../videos/Zen.mov";

const projects = [
  {
    name: "Jobly",
    description:
      "This is my first full-stack application built from scratch. Jobly allows users to search for companies, the job postings of each company and also they have the ability to apply for the wanted job. It's amazing how everything fits together perfectly. I've built this app using PostreSQL database, Node.js, Express and React.js ",
    video: Jobly
  },
  {
    name: "Restaurants Finder",
    description:
      "This app is made with love and passion. I'm a food lover who wants to help people to find the best restaurants in San Francisco. Sorted by categories such as: Trending this week, Weekend Brunches, Gluten-Free food and more. Also users can search for certain, favorite cuisine. Restaurants Finder is an app made with React.js while using Zomato API.",
    video: restaurantsFinderVideo
  },
  {
    name: "Snack Or Booze",
    description: `Welcome to my Silicon Valley cafe! You can choose your snack or drink, you can see the recipe how is it exactly made and how it is served. Also if you want you can add your favorite snack or drink to my cafe, so my list of choices will become bigger. To create this lovely application I was using React.js and Context API.`,
    video: snackVideo
  },
  {
    name: "Memory Game",
    description:
      "I've build this project as part of my Bootcamp pre-work. It was really fun and challenging at the same time to build something from scratch. This game is a basic matching game to test the player's memory. In a deck of paired cards, the player needs to match each pair to win the game. It's build with HTML/CSS and JavaScript.",
    video: memoryGameVideo
  },
  {
    name: "Lunchly",
    description:
      "Lunchly is a full-stack app where there is a list of reservations for restaurant customers. You can add new customer and make reservation including date and time, table for how many quests and small notes. I've built this app with Node.js and Express server while using PostgreSQL database for storing all the customer reservations.",
    video: Lunchly
  },
  {
    name: "ZenWellness",
    description:
      "Built e-commerce frontend website from scratch for weight-loss and physical well being. People can buy a book and a whole diet program based on science. To create this web app, I used JS, React, HTML/CSS, end-to-end PayPal payment functionality and Formspree for sending emails directly to the client's inbox.",
    video: Zen
  },

]

export default projects;