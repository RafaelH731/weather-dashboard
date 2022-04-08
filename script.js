
 //APi key for weather
 var APIkey = "7f41dda623830e062579b1c56271149f"
 
 //search container elements
 var searchContainer = document.getElementById("searchContainer");
 var searchButton = document.getElementsByClassName("btn")

 //current city searched container
 var currentCity = document.getElementsByClassName("currentWeather");
 var searchedCity = document.getElementById("searchedCity");

 // search result container
var searchResults = document.getElementsByClassName("searchResults");

//five day forecast container
var fiveDayForecast = document.getElementById("fiveDayForecast");

//parameters pulled
var temp = document.getElementById("temp");
var tempValue= document.querySelector(".temp");
var wind = document.getElementById("wind");
var windValue= document.querySelector(".wind");
var humidity = document.getElementById("humidity");
var humidityvalue = document.querySelector(".humidity")
var uvIndex = document.getElementById("uvIndex");
var uvIndexValue = document.querySelector(".uvIndex")

var cityName = "seattle"

function getWeather(cityName) {
    console.log("getting weather")
    let queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + cityName + "&appid=" + APIkey;
    fetch(queryURL)
    .then(function(response) {
        return response.json()
    }).then(function(data) {
        console.log("DATA: ", data)
        let lat = data.coord.lat;
        let lon = data.coord.lon;
    console.log(lat, lon)
       tempValue.innerHTML= data.main.temp;
       windValue.innerHTML= data.wind.speed;
       uvIndexValue.innerHTML = data.main.humidity;
    })
    
}
 getWeather("seattle")