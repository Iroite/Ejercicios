document.addEventListener('DOMContentLoaded', () => {

    // Get all "navbar-burger" elements
    const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);
  
    // Add a click event on each of them
    $navbarBurgers.forEach( el => {
      el.addEventListener('click', () => {
  
        // Get the target from the "data-target" attribute
        const target = el.dataset.target;
        const $target = document.getElementById(target);
  
        // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
        el.classList.toggle('is-active');
        $target.classList.toggle('is-active');
  
      });
    });
  
  });

  //API OpenWeatherMaps
  const API_KEY ="3e867330616c39fa60d18a1af5d82f16"

  //const LANG = "gl" podría ponerse como función?



  async function ObterDatosTempo(lat,lon) {
    const apiURL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric&lang=gl`
  // entendía que el idioma se ponía entre corchetes                    
    // //el idioma no se puede poner como función?
    try {
        const response = await fetch(apiURL);
    return await response.json();
} catch (error){
    console.error("Error al obtener datos del clima:", 
        error);
}
    
  }

  // console.log(obterDatosTempo("42.84","-8.57"))

async function actualizarDatos(lon, lat) {
 const data = await ObterDatosTempo(lon, lat)   
if (data){
  // document.getElementById("weatherTemperature").innerHTML = `${Math.round(data.main.temp)}ºC`;
  // document.getElementById("weatherIcon").src = `./assets/iconos/${data.weather[0].icon}.png`;
  // document.getElementById("feels_like").innerHTML = `${Math.round(data.main.feels_like)}ºC`;
  // document.getElementById("humidity").innerHTML = `${data.main.humidity}%`;
  // document.getElementById("tempMax").innerHTML = `${Math.round(data.main.temp_max)}ºC`;
  // document.getElementById("tempMin").innerHTML = `${Math.round(data.main.temp_min)}ºC`;
  // document.getElementById("location").innerHTML = `${data.name}`;
  // document.getElementById("description").innerHTML = `${data.weather[0].description}`;
    document.getElementById("weatherTemperature").innerHTML =`${data.main.temp}ºC`;
    document,getElementById("weatherIcon").src= `./assets/iconos/${data.weather[0].icon}.png`;
    document.getElementById("weatherLocation").innerHTML = `${data.name}`;
    document.getElementById("feels__like").innerHTML = `${data.main.feels_like}ºC`;
    document.getElementById("humidity").innerHTML = `${data.main.humidity}%`;
    document.getElementById("temp__max").innerHTML = `${Math.round ( data.main.temp_max)}ªC`;
    document.getElementById("temp__min").innerHTML = `${Math.round (data.main.temp_min)}ºC`;
    document.getElementById("weatherLocation").innerHTML = `${data.name}`;
    document.getElementById("description").innerHTML = `${data.weather[0].description}`;
    document.getElementById("pressure").innerHTML = `${data.main.pressure}hPa`;
    document.getElementById("wind").innerHTML = `${data.wind.speed}km/h`;
    document.getElementById("wind_direction").innerHTML = `${data.wind.deg}º`;
    document.getElementById("clouds").innerHTML = `${data.clouds.all}%`;
    document.getElementById("sea_level").innerHTML = `${data.main.sea_level}hPa`;
  }
   actualizarDatos(lon, lat);
}
  //geolocalizacíon: Tu ubicación
  // if (navigator.geolocation) {
  //   navigator.geolocation.getCurrentPosition(showPosition);
  // } else { 
  //   document.getElementById("demo").innerHTML =
  //   "Geolocation is not supported by this browser.";
  // }
  
  // function showPosition(position) {
  //   document.getElementById("demo").innerHTML =
  //   "Latitude: " + position.coords.latitude + "<br>" +
  //   "Longitude: " + position.coords.longitude;
