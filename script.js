let nowDate = new Date();
function formatDate(date){
    let days=["SUN","MON","TUE","WED","THUR","FRI","SAT"];
    let day=days[date.getDay()];

    let hours=date.getHours();
    if (hours<10) {
        hours =`0${hours}`;
        
    }
    let minutes=date.getMinutes();
    if (minutes<0) {
        minutes=`0${minutes}`;
    }
    return `${day}, ${hours}:${minutes}`;
}
let currentDate=document.querySelector("#displayDate");
currentDate.innerHTML=formatDate(nowDate);


function showWeather(response) {
  document.querySelector("#user-city").innerHTML = response.data.name;
  document.querySelector("#temperature").innerHTML = Math.round(
    response.data.main.temp
  );
  document.querySelector("#weatherDescription").innerHTML =
    response.data.weather[0].description;
  document.querySelector("#humidity").innerHTML = response.data.main.humidity;
  document.querySelector("#wind").innerHTML = Math.round(
    response.data.wind.speed
  );
  document.querySelector("#temp-min").innerHTML = `${Math.round(
    response.data.main.temp_min
  )}° `;
  document.querySelector("#temp-max").innerHTML = `${Math.round(
    response.data.main.temp_max
  )}°`;

  let weatherIcon = document.querySelector("#weather-icon");
  weatherIcon.setAttribute(
    "src",
    `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
  );
}