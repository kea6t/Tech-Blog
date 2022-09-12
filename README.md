# Tech-Blog

## Description
Build a CMS-style blog site similar to a Wordpress site, where developers can publish their blog posts and comment on other developers’ posts as well. You’ll build this site completely from scratch and deploy it to Heroku. Your app will follow the MVC paradigm in its architectural structure, using Handlebars.js as the templating language, Sequelize as the ORM, and the express-session npm package for authentication.

![Screen Shot](Screenshot.png)

## Table of Contents
  - [Description](#description)
  - [Table of Contents](#table-of-contents)
  - [Requirements](#requirements)
  - [User Story](#user-story)
  - [Acceptance Criteria](#acceptance-criteria)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Contributing](#contributing)
  - [Questions](#questions)


## Requirements
* Your project should fulfill the following requirements:

* Use Node.js and Express.js to create a RESTful API.

* Use Handlebars.js as the template's engine.

* Use MySQL and the Sequelize ORM for the database.

* Have both GET and POST routes for retrieving and adding new data.

* Be deployed using Heroku (with data).

* Use at least one new library, package, or technology that we haven’t discussed.

* Have a polished UI.

* Be responsive.

* Be interactive (i.e., accept and respond to user input).

* Have a folder structure that meets the MVC paradigm.

* Include authentication (express-session and cookies).

* Protect API keys and sensitive information with environment variables.

* Have a clean repository that meets quality coding standards (file structure, naming conventions, best practices for class/id naming conventions, indentation, quality comments, etc.).

* Have a quality README (with unique name, description, technologies used, screenshot, and link to deployed application).
## User Story
* AS A developer who writes about tech
* I WANT a CMS-style blog site
* SO THAT I can publish articles, blog posts, and my thoughts and opinions
## Acceptance Criteria
* GIVEN a CMS-style blog site
* WHEN I visit the site for the first time
* THEN I am presented with the homepage, which includes existing blog posts if any have been posted; navigation links for the homepage and the dashboard; and the option to log in
* WHEN I click on the homepage option
* THEN I am taken to the homepage
* WHEN I click on any other links in the navigation
* THEN I am prompted to either sign up or sign in
* WHEN I choose to sign up
* THEN I am prompted to create a username and password
* WHEN I click on the sign-up button
* THEN my user credentials are saved and I am logged into the site
* WHEN I revisit the site at a later time and choose to sign in
* THEN I am prompted to enter my username and password
* WHEN I am signed in to the site
* THEN I see navigation links for the homepage, the dashboard, and the option to log out
* WHEN I click on the homepage option in the navigation
* THEN I am taken to the homepage and presented with existing blog posts that include the post title and the date created
* WHEN I click on an existing blog post
* THEN I am presented with the post title, contents, post creator’s username, and date created for that post and have the option to leave a comment
* WHEN I enter a comment and click on the submit button while signed in
* THEN the comment is saved and the post is updated to display the comment, the comment creator’s username, and the date created
* WHEN I click on the dashboard option in the navigation
* THEN I am taken to the dashboard and presented with any blog posts I have already created and the option to add a new blog post
* WHEN I click on the button to add a new blog post
* THEN I am prompted to enter both a title and contents for my blog post
* WHEN I click on the button to create a new blog post
* THEN the title and contents of my post are saved and I am taken back to an updated dashboard with my new blog post
* WHEN I click on one of my existing posts in the dashboard
* THEN I am able to delete or update my post and taken back to an updated dashboard
* WHEN I click on the logout option in the navigation
* THEN I am signed out of the site
* WHEN I am idle on the site for more than a set time
* THEN I am able to view comments but I am prompted to log in again before I can add, update, or delete comments
## Installation
* Open the command line terminal and go to the proper directory
* Clone the git repo from :octocat: [kea6t](https://github.com/kea6t/Tech-Blog/tree/main)
* Then type npm init -y to install dependencies
* Then type npm install inquirer@8.2.4
* Then npm i bcrypt
* Then npm i connect-session-sequelize
* Then npm i dotenv
* Then npm i express
* Then npm i express-handlebars
* Then npm i express-session
* Then npm i handlebars
* Then npm i mysql2
* Then npm i sequelize
* Then enter: mysql -u root -p (then enter your password)
* Then enter: source db/schema.sql 'to create the database'
* Then enter: npm run seeds 'to populate the database '
* Then enter: "node server" to launch 
## Usage
* See the live version of the app here [Tech Blog](https://new--main-tech-blog.herokuapp.com/)

## Contributing
:octocat: [kea6t](https://github.com/kea6t)

This was generated with ❤️ made by Kenny 🔥🌌🌳🦝🚀

## Questions
If you have any questions :grey_question:, please send us an email at: :e-mail: Email us with any questions: sampleEmail@gmail.com
