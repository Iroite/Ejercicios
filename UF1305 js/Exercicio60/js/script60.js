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
  const API_KEY="3e867330616c39fa60d18a1af5d82f16"

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


async function actualizarDatos(lat, lon) {
 const data = await ObterDatosTempo(lat, lon)   
if (data){
    document.getElementById("weatherTemperature").innerHTML =`${Math.round ( data.main.temp)}ºC`;
    document.getElementById("weatherIcon").src = `./assets/iconos/${data.weather[0].icon}.png`;
    document.getElementById("sunset").innerHTML = `${data.sys.sunset}`;
    document.getElementById("sunrise").innerHTML = `${data.sys.sunrise}`;
    document.getElementById("feels_like").innerHTML = `${data.main.feels_like}ºC`;
    document.getElementById("humidity").innerHTML = `${data.main.humidity}%`;
    document.getElementById("temp__max").innerHTML = `${ data.main.temp_max}ºC`;
    document.getElementById("temp__min").innerHTML = `${data.main.temp_min}ºC`;
    document.getElementById("weatherLocation").innerHTML = `${data.name}`;
    document.getElementById("description").innerHTML = `${data.weather[0].description}`;
    document.getElementById("pressure").innerHTML = `${data.main.pressure}hPa`;
    document.getElementById("wind").innerHTML = `${data.wind.speed}km/h`;
    document.getElementById("wind_deg").innerHTML = `${data.wind.deg}º`;
    document.getElementById("clouds").innerHTML = `${data.clouds.all}%`;
    document.getElementById("localPressure").innerHTML = `${data.main.grnd_level}hPa`;
    document.getElementById("visibility").innerHTML = `${data.visibility}mtrs.`;
  }
  
}
console.log(ObterDatosTempo(65.5866397,22.0999817))
  //geolocalizacíon: Tu ubicación
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else { 
    document.getElementById("demo").innerHTML =
    "Geolocation is not supported by this browser.";
  }
  
  function showPosition(position) {
    document.getElementById("demo").innerHTML =
    "(Lat.: " + position.coords.latitude + ", " +
    "Lon.: " + position.coords.longitude + ")";
    actualizarDatos(position.coords.latitude, position.coords.longitude);
    console.log(ObterDatosTempo(position.coords.latitude, position.coords.longitude))

  }
  actualizarDatos(position.coords.latitude, position.coords.longitude);

  // const sunriseUnix = 1743188111;
  // const sunsetUnix = 1743142998;
  
  // function showSunTimes(sunriseUnix, sunsetUnix, timeZone) {
  //     console.log(`Sunrise (${timeZone}):`, new Date(sunriseUnix * 1000).toLocaleString('default', { timeZone }));
  //     console.log(`Sunset (${timeZone}):`, new Date(sunsetUnix * 1000).toLocaleString('default', { timeZone }));
  // }
  
  // showSunTimes(sunriseUnix, sunsetUnix, 'America/New_York');
  // showSunTimes(sunriseUnix, sunsetUnix, 'UTC');
  // console.log function showSunTimes()

  const video = document.getElementById('video');

  // Solicitamos acceso a la cámara web
  navigator.mediaDevices.getUserMedia({ video: true })
      .then(stream => {
          // Asignamos el stream de video al elemento de video
          video.srcObject = stream;
      })
      .catch(error => {
          console.error('Error al acceder a la cámara web:', error);
      });