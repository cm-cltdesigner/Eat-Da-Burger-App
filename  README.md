# Welcome to the Eat Demburger App.
<img src="https://media.tenor.com/images/31b970ddb6cb0d20af2a9c1141d7261f/tenor.gif"><br>
In this repo a burger logger with MySQL, Node, Express, Handlebars and a ORM was created. MVC design pattern was used; utilizing Node and MySQL to query and route data in this app, with Handlebars to generate your HTML.

## App Setup
Make a package.json file by running 'npm init' from the command line. Install the Express npm package: 'npm install express'. A server.js file was created. Install the Handlebars npm package: 'npm install express-handlebars'. Install MySQL npm package: 'npm install mysl'.

##Directory Structure
├── config │   ├── connection.js │   └── orm.js │  ├── controllers │   └── burgers_controller.js │ ├── db │   ├── schema.sql │   └── seeds.sql │ ├── models │   └── burger.js │  ├── node_modules │  ├── package.json │ ├── public │   └── assets │      ├── css │      │   └── burger_style.css │      └── img │      └── burger.png │   │ ├── server.js │ └── views ├── index.handlebars └── layouts └── main.handlebars

## How can I use the app?
Deployment on a node server is required. This app is setup to listen on a Heroku default port; in the absence of Heroku, it listens to local port of 3000 instead.<br><img src="https://i.ibb.co/2h2tGbb/Screen-Shot-2019-05-10-at-10-01-31-PM.png">

## Example of the Eat Demburger App
Feel free to visit the [Live Demo](https://eat-demburger.herokuapp.com)


## Future Development
For future development I would love to add more css features for the users interface. Along with perfecting the functionality and configuration.

## License
CREATED BY: COURTNEY MANERY, GITCREATIV LLC | 2019<br>
[MIT](https://choosealicense.com/licenses/mit/)
