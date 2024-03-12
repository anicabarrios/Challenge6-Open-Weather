var apiKey="490de71fce548fc8f1239b641585f254"
var dashboardEl = document.getElementById("dashboard");
var fiveDayEl = document.getElementById("five-day");
var searchInputEl = document.getElementById("search-input");
var searchBtnEl = document.getElementById("search-btn");
var sectionBtnEl = document.getElementById("historyBtn");
var historyArr = JSON.parse(localStorage.getItem("history")) || [];

// Function to display search history
function displayHistory() {
  sectionBtnEl.innerHTML = "";
  for (var i = 0; i < historyArr.length; i++) {
    sectionBtnEl.innerHTML += `<button type="button" class="btn bg-secondary w-100 mx-3 my-1">${historyArr[i]}</button>`;
  }
}

// Function to populate data when history button clicked
function populateData(event) {
  var currentButton = event.target;
  var cityName = currentButton.textContent;
  currentWeather(cityName);
  fiveForecast(cityName);
}

// Event listener for history button click
sectionBtnEl.addEventListener("click", populateData);

// Function to fetch current weather data
function currentWeather(cityName) {
  var url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=imperial`;

  fetch(url)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      if (!data || data.cod === "404") {
        // If city not found
        alert("City not found. Please enter a valid city name.");
        return;
      }

      // Update search history
      if (!historyArr.includes(data.name)) {
        historyArr.push(data.name);
        localStorage.setItem("history", JSON.stringify(historyArr));
        displayHistory();
      }

      // Display current weather
      dashboardEl.innerHTML = `
        <h3>${data.name} (${dayjs.unix(data.dt).format("MM/DD/YYYY")}) <img src="https://openweathermap.org/img/wn/${
        data.weather[0].icon
      }@2x.png" alt=""></h3>
        <p>Temperature: ${data.main.temp} F</p>
        <p>Wind: ${data.wind.speed} MPH</p>
        <p>Humidity: ${data.main.humidity}%</p>
        `;
    })
    .catch(function (error) {
      console.log("Error fetching current weather:", error);
    });
}

// Function to fetch 5-day forecast
function fiveForecast(cityName) {
  var url = `https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=${apiKey}&units=imperial`;

  fetch(url)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      if (!data || data.cod === "404") {
        // If city not found
        alert("City not found. Please enter a valid city name.");
        return;
      }

      // Display 5-day forecast
      fiveDayEl.innerHTML = "";
      for (var i = 3; i < data.list.length; i=i+8) {
        var forecast = data.list[i];
        var forecastDate = dayjs.unix(forecast.dt).format("MM/DD/YYYY");

        // Create forecast card
        var divCol = document.createElement("div");
        divCol.classList.add("col-sm-2", "mb-3", "mb-sm-0");
        var divCard = document.createElement("div");
        divCard.classList.add("card");
        var divBody = document.createElement("div");
        divBody.classList.add("card-body");
        var h5 = document.createElement("h5");
        h5.classList.add("card-title");
        h5.textContent = forecastDate;
        var img = document.createElement("img");
        img.src = `https://openweathermap.org/img/wn/${forecast.weather[0].icon}@2x.png`;
        var pTemp = document.createElement("p");
        pTemp.classList.add("card-text");
        pTemp.textContent = `Temp: ${forecast.main.temp} F`;
        var pWind = document.createElement("p");
        pWind.classList.add("card-text");
        pWind.textContent = `Wind: ${forecast.wind.speed} MPH`;
        var pHumidity = document.createElement("p");
        pHumidity.classList.add("card-text");
        pHumidity.textContent = `Humidity: ${forecast.main.humidity}%`;

        // Append elements to forecast card
        divBody.appendChild(h5);
        divBody.appendChild(img);
        divBody.appendChild(pTemp);
        divBody.appendChild(pWind);
        divBody.appendChild(pHumidity);
        divCard.appendChild(divBody);
        divCol.appendChild(divCard);
        fiveDayEl.appendChild(divCol);
      }
    })
    .catch(function (error) {
      console.log("Error fetching 5-day forecast:", error);
    });
}

// Function to handle search button click
function search() {
  var cityName = searchInputEl.value.trim();
  if (cityName) {
    currentWeather(cityName);
    fiveForecast(cityName);
  } else {
    alert("Please enter a city name.");
  }
}

// Event listener for search button click
searchBtnEl.addEventListener("click", search);

// Initial display of search history
displayHistory();
