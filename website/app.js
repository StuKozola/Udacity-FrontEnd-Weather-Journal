/* Global Variables */
// API Key for OpenWeatherMap
const apiKey = <your_api_key>&units=imperial';
// OpenWeatherMap base url
const baseUrl = 'http://api.openweathermap.org/data/2.5/weather?';

// variables to hold data from form
const zip = document.getElementById('zip');
const feelings = document.getElementById('feelings');

// variables to hold data from OpenWeatherMap
const temp = document.getElementById('temp');
const date = document.getElementById('date');
const content = document.getElementById('content');

// Create a new date instance dynamically with JS
let d = new Date();
let newDate = 1+d.getMonth()+'.'+ d.getDate()+'.'+ d.getFullYear();

/* Functions */
// Function to validate the zip code
const validateZip = (zip) => {
    if (zip.length === 5) {
        return true;
    } else {
        return false;
    }
};

// Function to get the weather form OpenWeatherMap
// URL: https://api.openweathermap.org/data/2.5/weather?zip=<zipcode>&appid=<your_api_key>
const getWeather = async () => {
    const zipcode = zip.value;
    if (validateZip(zipcode)) {
        const response = await fetch(baseUrl + 'zip=' + zipcode + '&APPID=' + apiKey);
        try {
            const data = await response.json();
            console.log(data);
            return data;
        } catch (error) {
            console.log("error", error);
        }
    } else {
        alert("Please enter a valid zip code");
    }
};

// Function to POST data to the server
const postData = async (url = '', data = {}) => {
    const response = await fetch(url, {
        method: 'POST',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            temperature: data.temp,
            date: data.date,
            user_response: data.feelings
        }),
    });
    try {
        const newData = await response.json();
        return newData;
    } catch (error) {
        console.log("error", error);
    }
};

// Function to update the UI with the new data
const updateUI = async () => {
    const request = await fetch('/all');
    try {
        const allData = await request.json();
        console.log(allData);
        temp.innerHTML = `Temperature: ${allData.temperature} F`;
        date.innerHTML = `Date: ${allData.date}`;
        content.innerHTML = `You are ${allData.user_response}`;
    } catch (error) {
        console.log("error", error);
    }
};

// Event listener to add function to existing HTML DOM element (generate button)
// This is an asych function with chained promises
const generateBtn = document.getElementById('generate');
generateBtn.addEventListener('click', (e) => {
    e.preventDefault();
    getWeather().then(data => {
        // post data to /add
        console.log(data.main.temp);
        postData('/add', {
            temp: data.main.temp,
            date: newDate,
            feelings: feelings.value
        }).then(() => {
            // call updateUI to update the UI with the new data from the server
            updateUI()
        }).catch(err => {
            console.log(err)
            alert('Something went wrong!  Please try again.');
        });
    } );
} );
