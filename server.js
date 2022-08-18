// Setup empty JS object to act as endpoint for all routes
projectData = {};

// Require Express to run server and routes
const express = require('express');

/* Dependencies */
const bodyParser = require('body-parser');
const cors = require('cors');

// Start up an instance of app
const app = express();

/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance
app.use(cors());

// Initialize the main project folder
app.use(express.static('website'));

// Setup Server
const port = 3000;
const server = app.listen(port, listening);

// listening function
function listening(){
    // log server status and port number
    console.log(`running on localhost:${port}`);
};

/* Routes */
// GET route for getting all projects
app.get('/all', getAllProjects);
// function to get all projects
function getAllProjects(req, res){
    res.send(projectData);
    console.log('GET request received');
    console.log(projectData);
};

// POST route for adding weather data
app.post('/add', addData);
// function to add weather data
function addData(req, res){
    projectData['temperature'] = req.body.temperature;
    projectData['date'] = req.body.date;
    projectData['user_response'] = req.body.user_response;
    res.send(projectData);
    console.log('POST request received');
    console.log(projectData);
};

