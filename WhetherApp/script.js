const cityInput = document.getElementById("cityInput");
const searchBtn = document.getElementById("searchBtn");

const city = document.getElementById("city");

const temperature = document.getElementById("temperature");
const condition = document.getElementById("condition");
const humidity = document.getElementById("humidity");
const wind = document.getElementById("wind");
const error = document.getElementById("error");

searchBtn.addEventListener("click", getWeather);

cityInput.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    getWeather();
  }
});

function getWeather() {

  const cityName = cityInput.value.trim();

  error.textContent = "";

  if (cityName === "") {
    error.textContent = "Please enter a city name.";
    return;
  }

  // Demo weather data
  const weatherData = {
    mumbai: {
      temp: 30,
      condition: "Sunny",
      humidity: 70,
      wind: 15
    },
    delhi: {
      temp: 32,
      condition: "Clear",
      humidity: 55,
      wind: 12
    },
    pune: {
      temp: 27,
      condition: "Cloudy",
      humidity: 65,
      wind: 10
    },
    latur: {
      temp: 28,
      condition: "Partly Cloudy",
      humidity: 60,
      wind: 11
    }
  };

  const data = weatherData[cityName.toLowerCase()];

  if (!data) {
    error.textContent = "Weather data not available for this city.";
    return;
  }

  city.textContent = cityName;
  temperature.textContent = `${data.temp}°C`;
  condition.textContent = data.condition;
  humidity.textContent = data.humidity;
  wind.textContent = data.wind;
}
