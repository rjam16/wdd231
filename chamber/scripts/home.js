const today = new Date();
const currentyear = document.querySelector("#currentyear");
currentyear.innerHTML = `<span class="highlight">${today.getFullYear()}</span>`;

let text = document.lastModified;
document.getElementById("lastModified").innerHTML = text;
const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');

hamButton.addEventListener('click', () => {
    navigation.classList.toggle('open');
    hamButton.classList.toggle('open');
});

const joinButton = document.querySelector('.hero button');
joinButton.addEventListener('click', () => {
    window.open("#");
})
//why is it showing as 288??
//temp pulling from URL is weird
const currentWeather = document.querySelector('.weatherStats');
const forecast = document.querySelector(".forecast");

const lat = "37.56";
const lon = "126.97";
const APIkey = "e241bcc26e6a4acc0cb11280f6cb278a";
const weatherURL = `https://api.openweathermap.org/data/2.5/weather?lat=37.56&lon=126.97&units=metric&appid=e241bcc26e6a4acc0cb11280f6cb278a`;
const forecastURL = `https://api.openweathermap.org/data/2.5/forecast?lat=37.56&lon=126.97&units=metric&appid=e241bcc26e6a4acc0cb11280f6cb278a`;

async function apiFetch(url, displayFunction) {
    try{
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            displayFunction(data);
        } else {
            throw Error(await response.text());
        }
    }
    catch(error) {
        console.log(error);
    }
}

function displayCurrentWeather(data) {
    const temp = document.createElement('p');
    const description = document.createElement('p');
    const highandlow = document.createElement('p');

    temp.innerHTML = `Temp: <strong>${Math.round(data.main.temp)}°C</strong>`;
    const iconSRC = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
    let alt = data.weather[0].description;
    const weatherIcon = document.createElement('img');
    weatherIcon.setAttribute('src', iconSRC);
    weatherIcon.setAttribute('alt', alt);
    weatherIcon.setAttribute('width', "100");
    weatherIcon.setAttribute('height', "100");
    weatherIcon.setAttribute('id', "weatherIcon");
    description.textContent = `${alt}`;
    description.setAttribute('id', 'desc');
    temp.setAttribute('id', 'temp');
    highandlow.innerHTML = `High: <strong>${Math.round(data.main.temp_max)}°C</strong> Low: <strong>${Math.round(data.main.temp_min)}°C</strong>`;
    currentWeather.appendChild(temp);
    currentWeather.appendChild(description);
    currentWeather.appendChild(weatherIcon);
    currentWeather.appendChild(highandlow);
}

function displayForecast(data) {
    const todayTemp = document.createElement('p');
    const tomorrowTemp = document.createElement('p');
    const nextTemp = document.createElement('p');
    todayTemp.innerHTML = `Today: <strong>${Math.round(data.list[0].main.temp)}°C</strong>`;
    const tomorrow = new Date(data.list[8].dt_txt);
    const nextDay = new Date(data.list[16].dt_txt);
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    tomorrowTemp.innerHTML = `${days[tomorrow.getDay()]}: <strong>${Math.round(data.list[8].main.temp)}°C</strong>`;
    nextTemp.innerHTML = `${days[nextDay.getDay()]}: <strong>${Math.round(data.list[16].main.temp)}°C</strong>`;
    forecast.appendChild(todayTemp);
    forecast.appendChild(tomorrowTemp);
    forecast.appendChild(nextTemp);
}

apiFetch(weatherURL, displayCurrentWeather);
apiFetch(forecastURL, displayForecast);

//spotlight works
const cards = document.querySelector('#spotlight');
const filename = 'data/members.json';

async function getMemberData() {
    const response = await fetch(filename);
    if (response.ok) {
        const data = await response.json()
        displaySpotlights(data.members);
    }
}

const displaySpotlights = (members) => {
    const spotlights = members.filter((member) => member.membership === 3 || member.membership === 2);
    const randomSpotlights = shuffleArray(spotlights);
    displayMembers(randomSpotlights.slice(0,2));
}

const shuffleArray = array => {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        const temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array;
}

const displayMembers = (members) => {
    members.forEach((member) => {
        let logo = document.createElement('a');
        logo.setAttribute('href', member.url);
        logo.innerHTML = `<img src=${member.logo} alt="logo for ${member.businessName}" height="120" loading="lazy">`;
        cards.appendChild(logo);
    });
}
getMemberData();