# Weather-Journal App Project

# Table of Contents
- [Weather-Journal App Project](#weather-journal-app-project)
- [Table of Contents](#table-of-contents)
  - [Overview](#overview)
  - [Project Instructions](#project-instructions)
    - [Taks Completed](#taks-completed)
- [Installation and Configuration](#installation-and-configuration)
  - [Open Weather API](#open-weather-api)
  - [Installation of Dependencies](#installation-of-dependencies)
  - [Clone the Repo](#clone-the-repo)
  - [Start the Webserver Locally](#start-the-webserver-locally)
  - [Test the Routes and Verify Server is Up](#test-the-routes-and-verify-server-is-up)
  - [Play with the App to Test it](#play-with-the-app-to-test-it)
## Overview
This project required creating an asynchronous web app that uses Web API and user data to dynamically update the UI.  A screenshot of the completed project is shown below.

![Wether Journal App](/images/weather-journal-app-example.png)

## Project Instructions
This will require modifying the `server.js` file and the `website/app.js` file. You can see `index.html` for element references, and once you are finished with the project steps, you can use `style.css` to style your application to customized perfection.

### Taks Completed
1. Set up the project environment and create a basic server in `server.js`
2. Add GET and POST routes to the `server.js` file
3. Acquire weather data from OpenWeather API when user clicks the 'Generate' button
4. 

# Installation and Configuration
## Open Weather API
The Open Weather API is a free weather API that allows you to get the current weather in any city in the world.  To run this app you will need an API key from Open Weather.  Sign up for a free API key and add it to the `weather/app.js` file. See [Open Weather API](https://openweathermap.org/api) for more information.

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
## Test the Routes and Verify Server is Up
In another terminal, run the following commands:
```bash
# get all weather journal entries (if any)
curl -X GET http://localhost:3000/all
# add a weather journal entry
curl -X POST -H "Content-Type: application/json" -d '{"temperature": "90 F", "date": "08/18/2022", "user_response": "Going to be a hot one today!"}' http://localhost:3000/add
# get all weather journal entries (if any)
curl -X GET http://localhost:3000/all
```

## Play with the App to Test it
In a browser, navigate to http://localhost:3000/ and you should see the following:

![Wether Journal App](/images/weather-journal-app.png)