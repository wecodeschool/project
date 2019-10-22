// 1. Select the form
// 2. Get the search input value
// 3. Make HTTP request to the Weather API with the search input value
// 4. Wait for the API to respond
// 5. Select the temperature placeholder
// 6. Display the temperature from the HTTP response

function displayTemperature(response) {
  // step 5
  let temperature = document.querySelector("#temperature");
  // step 6
  temperature.innerHTML = `${Math.round(response.data.main.temp)}°C`;
  let city = document.querySelector("#city");
  city.innerHTML = response.data.name;
}

function getTemperature(city) {
  // Step 3
  let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=5f472b7acba333cd8a035ea85a0d4d4c&units=metric`;
  // Step 4
  axios.get(url).then(displayTemperature);
}

function search(event) {
  event.preventDefault();
  // Step 2
  let cityInput = document.querySelector("#city-input");
  getTemperature(cityInput.value);
}

// Step 1
let searchForm = document.querySelector("#search-form");
searchForm.addEventListener("submit", search);
getTemperature("Porto");
