# Weather-Journal App Project

## Overview
This project requires you to create an asynchronous web app that uses Web API and user data to dynamically update the UI. 

## Project Instructions
This will require modifying the `server.js` file and the `website/app.js` file. You can see `index.html` for element references, and once you are finished with the project steps, you can use `style.css` to style your application to customized perfection.

## Extras
If you are interested in testing your code as you go, you can use `tests.js` as a template for writing and running some basic tests for your code.

# Table of Contents
- [Weather-Journal App Project](#weather-journal-app-project)
  - [Overview](#overview)
  - [Project Instructions](#project-instructions)
  - [Extras](#extras)
- [Table of Contents](#table-of-contents)
- [Installation and Configuration](#installation-and-configuration)
  - [Installation of Dependencies](#installation-of-dependencies)
  - [Clone the Repo](#clone-the-repo)
  - [Start the Webserver Locally](#start-the-webserver-locally)
  - [Test the Routes](#test-the-routes)

# Installation and Configuration

## Installation of Dependencies
Install the following dependencies:
1. Node.js - https://nodejs.org/en/
2. Express.js - https://expressjs.com/en/
3. cors (for cross-origin resource sharing)
4. body-parser (for parsing JSON)

```bash
# Using Ubuntu, install node.js
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt-get install -y nodejs
# install node package dependencies
npm install express body-parser cors
```

## Clone the Repo
```bash
git clone https://TODO
```
## Start the Webserver Locally
```bash
node server.js
```

## Test the Routes
In another terminal, run the following commands:
```bash
# get all weather journal entries (if any)
curl -X GET http://localhost:3000/all
# add a weather journal entry
curl -X POST -H "Content-Type: application/json" -d '{"temperature": "90 F", "date": "08/18/2022", "user_response": "Going to be a hot one today!"}' http://localhost:3000/add
# get all weather journal entries (if any)
curl -X GET http://localhost:3000/all
```
