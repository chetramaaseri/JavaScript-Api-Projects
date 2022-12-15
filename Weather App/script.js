const result = document.getElementById("result");
const inpCity = document.getElementById("city");
const searchBtn = document.getElementById("search-btn");

function getWeather() {
    let cityName = inpCity.value;
    let URL = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric`;
    fetch(URL)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            result.innerHTML = `
        <h2>${data.name}</h2>
        <h4 class="weather">${data.weather[0].main}</h4>
        <h4 class="desc">${data.weather[0].description}</h4>
        <img src="https://openweathermap.org/img/w/${data.weather[0].icon}.png" alt="">
        <h1>${data.main.temp} &#176;</h1>
        <div class="temp-container">
            <div>
                <h4 class="title">min</h4>
                <h4 class="temp">${data.main.temp_min}</h4>
            </div>
            <div>
                <h4 class="title">max</h4>
                <h4 class="temp">${data.main.temp_max}</h4>
            </div>
        </div>            
        `;
        }).catch(() => {
            result.innerHTML = `<h3 class="error">Please enter Correct Details</h3>`
        });
}
window.addEventListener('load', getWeather);
searchBtn.addEventListener('click', getWeather);