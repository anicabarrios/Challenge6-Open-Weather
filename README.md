# Weather Dashboard

## Description

The Weather Dashboard is a web application that provides travelers with real-time weather outlooks for multiple cities. Utilizing the [5 Day Weather Forecast](https://openweathermap.org/forecast5) API from OpenWeatherMap, this dashboard displays current and future weather conditions, enabling users to plan their trips efficiently. The application features dynamically updated HTML and CSS and makes use of `localStorage` to store search history persistently.

![Weather Dashboard Screenshot](/assets/images/screenshot-weather.png)

[Click here to view the live application.](https://anicabarrios.github.io/Weather-Dashboard/)

## Table of Contents

- [Features](#features)
- [How to Use](#how-to-use)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [API Configuration](#api-configuration)
- [Usage](#usage)
- [How It Works](#how-it-works)
- [Contributing](#contributing)
- [License](#license)

## Features

- Search for cities to retrieve current and future weather conditions.
- Display of the city name, date, weather conditions icon, temperature, humidity, and wind speed for the current day.
- A 5-day weather forecast that includes the date, weather condition icons, temperature, wind speed, and humidity.
- A search history that allows users to quickly revisit previously searched cities.

## How to Use

1. **Search for a City**: Enter the name of the city in the search bar and submit to retrieve weather information.
2. **View Weather Conditions**: The dashboard will display the current weather conditions as well as a 5-day forecast for the selected city.
3. **Utilize Search History**: Click on a city name in the search history to quickly access weather information for that city again.

## Getting Started

### Prerequisites

To run the Weather Dashboard locally, you will need:
- A modern web browser that supports HTML5, CSS3, and JavaScript ES6.
- An API key from OpenWeatherMap. You can register for one [here](https://openweathermap.org/appid). Note that it may take up to 2 hours for the API key to activate.

### Installation

Clone the repository to your local machine:

`git clone https://github.com/yourusername/weather-dashboard.git`

### API Configuration

Replace `{API key}` in the API request URL with your own OpenWeatherMap API key:

https://api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={YOUR_API_KEY}

**Hint**: To retrieve geographical coordinates for a city, use the [Geocoding API](https://openweathermap.org/api/geocoding-api) from OpenWeatherMap.

## Usage

After setting up your API key, open the `index.html` file in your web browser to start using the Weather Dashboard.

## How It Works

The dashboard makes API requests to OpenWeatherMap to fetch weather data based on the geographical coordinates of the city. It then dynamically updates the webpage with this information, providing an interactive and informative user experience.

## Contributing

Contributions are welcome! Please feel free to submit a pull request or open an issue for further discussion.

## License

This project is licensed under the MIT License. 