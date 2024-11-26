const api_key = "5ff1a484ceddb8e931fa53a0a90c47db";
const api_url = `https://api.openweathermap.org/data/2.5/weather?units=metric&q=`;

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

async function checkweather(city) {
  const response = await fetch(api_url + city + `&appid=${api_key}`);
  var data = await response.json();
  console.log(data);

  document.querySelector(".city").innerHTML = data.name;
  document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
  document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
  document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";
  const weatherMain = data.weather[0].main.toLowerCase();

  if (weatherMain[0] === "clouds") {
    weatherIcon.src = "images/clouds.png";
  } else if (weatherMain[0] === "clear") {
    weatherIcon.src = "images/clear.png";
  } else if (weatherMain[0] === "rain") {
    weatherIcon.src = "images/rain.png";
  } else if (weatherMain[0] === "drizzle") {
    weatherIcon.src = "images/drizzle.png";
  } else if (weatherMain[0] === "snow") {
    weatherIcon.src = "images/snow.png";
  } else if (weatherMain[0] === "mist") {
    weatherIcon.src = "images/mist.png";
  }
}

searchBtn.addEventListener("click", function () {
  checkweather(searchBox.value);
});
