import axios from "axios";

let now = new Date();

let h2 = document.querySelector("h2");

let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday"
];
let day = days[now.getDay()];
let hours = now.getHours();
let minutes = now.getMinutes();
h2.innerHTML = `${day}, ${hours}:${minutes}`;

function searchyourCity(event) {
  event.preventDefault();
  let cityInput = document.querySelector("#city-input");
  console.log(cityInput.value);
  let h1 = document.querySelector("h1");
  h1.innerHTML = `${cityInput.value}`;

  getWeather(cityInput.value);
}

let form = document.querySelector("form");
form.addEventListener("submit", searchyourCity);

function getWeather(city) {
  let apiKey = "7059cb165caa3316bff682d263a01b1e";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;

  axios.get(apiUrl).then(showWeather);
}

function showWeather(response) {
  document.querySelector("h2").innerHTML = response.data.name;
  document.querySelector("#currentTemperature").innerHTML = `${Math.round(
    response.data.main.temp
  )}°`;
}

function searchArea(position) {
  let apiKey = "7059cb165caa3316bff682d263a01b1e";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=${apiKey}&units=imperial`;

  axios.get(apiUrl).then(showWeather);
}
function getCurrentLocation(event) {
  event.preventDefault();
  navigator.geolocation.getCurrentPosition(searchArea);
}

let currentButton = document.querySelector("#currentbutton");
currentButton.addEventListener("click", getCurrentLocation);
