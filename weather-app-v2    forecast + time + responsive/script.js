
// const apiKey = "39766731ec23ef8cd3df577ac2d2b3a3";
// const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

// const searchBox = document.querySelector(".search input");
// const searchBtn = document.querySelector(".search button")
// const weatherIcon = document.querySelector(".weathericon")

// async function checkWeather(city) {

//     const errorDiv = document.querySelector(".error");
//     const loadingDiv = document.querySelector(".loading");
//     const weatherDiv = document.querySelector(".weather");

//     if (city.trim() === "") {
//         document.querySelector(".error").style.display = "block";
//         document.querySelector(".error p").textContent = "Please enter a city name.";
//         document.querySelector(".weather").style.display = "none";
//         return;
//     }
//     try {

//         const response = await fetch(apiUrl + city + `&appid=${apiKey}`);

//         if (!response.ok) {
//             document.querySelector(".error").style.display = "block"
//             document.querySelector(".error p").style.display = "Invalid city name"
//             document.querySelector(".weather").style.display = "none"
//             return;

//         }

//         const data = await response.json();

//         document.querySelector(".city").innerHTML = data.name;
//         document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
//         document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
//         document.querySelector(".wind").innerHTML = data.wind.speed + " Km/h";

//         if (data.weather[0].main == "Haze") {
//             weatherIcon.src = "weather.png's/haze.png"
//         }
//         else if (data.weather[0].main == "Clouds") {
//             weatherIcon.src = "weather.png's/clouds.png";
//         }
//         else if (data.weather[0].main == "Rain") {
//             weatherIcon.src = "weather.png's/rain.png";
//         }
//         else if (data.weather[0].main == "Drizzle") {
//             weatherIcon.src = " weather.png's/drizzle.png";
//         }
//         else if (data.weather[0].main == "Snow") {
//             weatherIcon.src = "weather.png's/snow.png";
//         }
//         else if (data.weather[0].main == "Sun") {
//             weatherIcon.src = "weather.png's/sun.png";
//         }

//         document.querySelector(".weather").style.display = ("block");
//         document.querySelector(".error").style.display = "none"
//     }

//     catch (error) {
//         document.querySelector(".error").style.display = "block";
//         document.querySelector(".error p").textContent = "Network error. Try again later.";
//         document.querySelector(".weather").style.display = "none";
//     }
// }

// searchBtn.addEventListener("click", () => {
//     checkWeather(searchBox.value);
// });

// searchBox.addEventListener("keypress", (e) => {
//   if (e.key === "Enter") checkWeather(searchBox.value);
// });


















// const apiKey = "39766731ec23ef8cd3df577ac2d2b3a3";
// const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

// const searchBox = document.querySelector(".search input");
// const searchBtn = document.querySelector(".search button");
// const weatherIcon = document.querySelector(".weathericon");

// async function checkWeather(city) {
//     const errorDiv = document.querySelector(".error");
//     const loadingDiv = document.querySelector(".loading");
//     const weatherDiv = document.querySelector(".weather");

//     errorDiv.style.display = "none";
//     weatherDiv.style.display = "none";
//     loadingDiv.style.display = "flex";


//     if (city.trim() === "") {
//         loadingDiv.style.display = "none";
//         errorDiv.style.display = "block";
//         errorDiv.querySelector("p").textContent = "Please enter a city name.";
//         return;
//     }

//     try {
//         const response = await fetch(apiUrl + city + `&appid=${apiKey}`);

//         if (!response.ok) {
//             loadingDiv.style.display = "none";
//             errorDiv.style.display = "block";
//             errorDiv.querySelector("p").textContent = "Invalid city name";
//             return;
//         }

//         const data = await response.json();

//         document.querySelector(".city").innerHTML = data.name;
//         document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
//         document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
//         document.querySelector(".wind").innerHTML = data.wind.speed + " Km/h";

//         if (data.weather[0].main === "Haze") {
//             weatherIcon.src = "weather.png's/haze.png";
//         } else if (data.weather[0].main === "Clouds") {
//             weatherIcon.src = "weather.png's/clouds.png";
//         } else if (data.weather[0].main === "Rain") {
//             weatherIcon.src = "weather.png's/rain.png";
//         } else if (data.weather[0].main === "Drizzle") {
//             weatherIcon.src = "weather.png's/drizzle.png";
//         } else if (data.weather[0].main === "Snow") {
//             weatherIcon.src = "weather.png's/snow.png";
//         } else {
//             weatherIcon.src = "weather.png's/sun.png";
//         }


//         loadingDiv.style.display = "none";
//         weatherDiv.style.display = "block";
//         errorDiv.style.display = "none";

//     } catch (error) {
//         loadingDiv.style.display = "none";
//         errorDiv.style.display = "block";
//         errorDiv.querySelector("p").textContent = "Network error. Try again later.";
//         weatherDiv.style.display = "none";
//     }
// }
 

// async function getForecast(city) {
//     const forecastContainer = document.querySelector(".forecast-container");
//     forecastContainer.innerHTML = ""; // clear old forecast

//     try {
//         const response = await fetch(
//             "https://api.openweathermap.org/data/2.5/forecast?units=matricq="
//         );
//         const data = await response.json();
//         console.log(data);
//         // Pick one forecast per day (every 8th item = ~24h)
//         for (let i = 0; i < data.list.length; i += 8) {
//             const day = data.list[i];
//             const date = new Date(day.dt * 1000);
//             const options = { weekday: "short" };

//             const forecastEl = document.createElement("div");
//             forecastEl.classList.add("forecast-day");
//             forecastEl.innerHTML = `
//                 <p>${date.toLocaleDateString(undefined, options)}</p>
//                 <img src="weather-icons/${day.weather[0].main.toLowerCase()}.png" alt="${day.weather[0].main}">
//                 <p>${Math.round(day.main.temp)}°C</p>
//             `;

//             forecastContainer.appendChild(forecastEl);
//         }

//     } catch (error) {
//         console.log("Forecast fetch error:",error);
//     }
// }
 


// searchBtn.addEventListener("click", () => {
//     checkWeather(searchBox.value);
// });

// searchBox.addEventListener("keypress", (e) => {
//     if (e.key === "Enter") checkWeather(searchBox.value);
// });















const apiKey = "39766731ec23ef8cd3df577ac2d2b3a3";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weathericon");

// Fetch current weather
async function checkWeather(city) {
    const errorDiv = document.querySelector(".error");
    const loadingDiv = document.querySelector(".loading");
    const weatherDiv = document.querySelector(".weather");

    // Reset
    errorDiv.style.display = "none";
    weatherDiv.style.display = "none";
    loadingDiv.style.display = "flex"; // show spinner

    if (city.trim() === "") {
        loadingDiv.style.display = "none";
        errorDiv.style.display = "block";
        errorDiv.querySelector("p").textContent = "Please enter a city name.";
        return;
    }

    try {
        const response = await fetch(apiUrl + city + `&appid=${apiKey}`);

        if (!response.ok) {
            loadingDiv.style.display = "none";
            errorDiv.style.display = "block";
            errorDiv.querySelector("p").textContent = "Invalid city name";
            return;
        }

        const data = await response.json();




document.querySelector(".city").innerHTML = data.name;

const timezoneOffset = data.timezone; 
const localTime = new Date(Date.now() + timezoneOffset * 1000 - new Date().getTimezoneOffset() * 60000);
const options = { 
    weekday: "long", 
    hour: "2-digit", 
    minute: "2-digit", 
    day: "numeric", 
    month: "short"
};
document.querySelector(".datetime").textContent = localTime.toLocaleString("en-US", options);





        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
        document.querySelector(".wind").innerHTML = data.wind.speed + " Km/h";

        // Set weather icon
        if (data.weather[0].main === "Haze") {
            weatherIcon.src = "weather-icons/haze.png";
        } else if (data.weather[0].main === "Clouds") {
            weatherIcon.src = "weather-icons/clouds.png";
        } else if (data.weather[0].main === "Rain") {
            weatherIcon.src = "weather-icons/rain.png";
        } else if (data.weather[0].main === "Drizzle") {
            weatherIcon.src = "weather-icons/drizzle.png";
        } else if (data.weather[0].main === "Snow") {
            weatherIcon.src = "weather-icons/snow.png";
        } else {
            weatherIcon.src = "weather-icons/sun.png";
        }

        // Show weather and hide error
        loadingDiv.style.display = "none";
        weatherDiv.style.display = "block";
        errorDiv.style.display = "none";

        // Fetch 5-day forecast
        getForecast(city);

    } catch (error) {
        loadingDiv.style.display = "none";
        errorDiv.style.display = "block";
        errorDiv.querySelector("p").textContent = "Network error. Try again later.";
        weatherDiv.style.display = "none";
    }
}

// Fetch 5-day forecast
async function getForecast(city) {
    const forecastContainer = document.querySelector(".forecast-container");
    forecastContainer.innerHTML = ""; // clear old forecast

    try {
        const response = await fetch(
            `https://api.openweathermap.org/data/2.5/forecast?units=metric&q=${city}&appid=${apiKey}`
        );
        const data = await response.json();

        // Pick one forecast per day (every 8th item ≈ 24h)
        for (let i = 0; i < data.list.length; i += 8) {
            const day = data.list[i];
            const date = new Date(day.dt * 1000);
            const options = { weekday: "short" };

            const forecastEl = document.createElement("div");
            forecastEl.classList.add("forecast-day");
            forecastEl.innerHTML = `
                <p>${date.toLocaleDateString(undefined, options)}</p>
                <img src="weather-icons/${day.weather[0].main.toLowerCase()}.png" alt="${day.weather[0].main}">
                <p>${Math.round(day.main.temp)}°C</p>
            `;

            

            forecastContainer.appendChild(forecastEl);
        }

    } catch (error) {
        console.log("Forecast fetch error:", error);
    }
}

// Event listeners
searchBtn.addEventListener("click", () => {
    checkWeather(searchBox.value);
});

searchBox.addEventListener("keypress", (e) => {
    if (e.key === "Enter") checkWeather(searchBox.value);
});
