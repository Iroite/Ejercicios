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
  const lat ="43.2806201"
  const lon = "-8.8729321"
  const lang = "gl"
  async function ObterDatosTempo(lat, lon) {
    const apiURL= `https//api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric&lang=gl`
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
    document.getElementById("weatherTemperature").innerHTML =`${data.main.temp}ºC`;
}
}


  //geolocalizacíon: Tu ubicación
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else { 
    document.getElementById("demo").innerHTML =
    "Geolocation is not supported by this browser.";
  }
  
  function showPosition(position) {
    document.getElementById("demo").innerHTML =
    "Latitude: " + position.coords.latitude + "<br>" +
    "Longitude: " + position.coords.longitude;
  }