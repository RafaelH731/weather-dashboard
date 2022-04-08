
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
var humidityValue = document.querySelector(".humidity")
var uvIndex = document.getElementById("uvIndex");
var uvIndexValue = document.querySelector(".uvIndex")

var date1 = document.querySelector(".date1")
var date1Icon = document.querySelector(".date1Icon")
var date1Temp = document.querySelector(".date1Temp")
var date1Wind = document.querySelector(".date1Wind")
var date1Humidity = document.querySelector(".date1Humidity")


var cityName = "seattle"
//callin the APIs to get all the info to populate the page
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
       humidityValue.innerHTML = data.main.humidity;
//second API getting called to get the UVindex and 5 day weather
       let UVQueryURL = "https://api.openweathermap.org/data/2.5/onecall?lat=" + lat + "&lon=" + lon + "&appid=" + APIkey;

       fetch(UVQueryURL)
       .then(function(response){
           return response.json()
       }).then(function(data){
           console.log("data: ", data)
        uvIndexValue.innerHTML = data.daily[0].uvi;
        //info for the second day
        date1Temp.innerHTML = data.daily[1].temp.day;
        date1Wind.innerHTML = data.daily[1].wind_speed
        date1Humidity.innerHTML = data.daily[1].humidity
       })
      
    })
    
}
 getWeather("seattle")