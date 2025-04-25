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

// Obter parámetros da URL
const params = new URLSearchParams(window.location.search);
const lat = params.get('lat');
const lon = params.get('lon');

if (lat && lon) {
  actualizarDatos(lat, lon);
} else {
  // Usar valores por defecto para O Milladoiro
  actualizarDatos(42.84, -8.57);
}



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



    // Abrente
    const abrenteTimestamp = data.sys.sunrise * 1000;

    const abrente = new Date(abrenteTimestamp);
    console.log(abrente)

    const horaAbrente = abrente.getHours();
    const minutosAbrente = abrente.getMinutes();

    document.getElementById("sunrise").innerHTML = `${horaAbrente}:${minutosAbrente}h`;
    
    // Solpor
    const solporTimestamp = data.sys.sunset * 1000;
    const solpor = new Date(solporTimestamp);

    const horaSolpor = solpor.getHours();
    const minutosSolpor = solpor.getMinutes();
        document.getElementById("sunset").innerHTML= `${horaSolpor}:${minutosSolpor}h`;
  
    //data oficial
    const fechaTimestamp = data.dt*1000;
    const fecha = new Date(fechaTimestamp)

    const options = { weekday: "long", year: "numeric", month: "long", day: "numeric", };

    document.getElementById("date").innerHTML = fecha.toLocaleDateString("es-ES", options)

    //Data oficial galego Al no estar definida como la es-ES hay que construir cada elemento de texto (lunes...Xaneiro...)

    const diasSemana = ["Domingo","Luns","Martes","Mércores","Xoves","Venres","Sábado"]
    const meses = ["Xaneiro","Febreiro","Marzo","Abril","Maio","Xuño","Xullo","Agosto","Setembro","Outubro","Novembro","Decembro"]

    // console.log(fecha)
    // const mesAPI = fecha.getMonth();
    // console.log(mesAPI)

    const mes = meses[fecha.getMonth()]
    // console.log(mes)
    const day = diasSemana [fecha.getDay()]
    // console.log(day)


 document.getElementById("dategl").innerHTML = `${day}, ${fecha.getDate()} de ${mes} de ${fecha.getFullYear()}`



      }

  


  
}
// console.log(ObterDatosTempo(65.5866397,22.0999817))
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
    // console.log(ObterDatosTempo(position.coords.latitude, position.coords.longitude))

  }
 //(comentado 3 abril 25 a las 13:43 )actualizarDatos(position.coords.latitude, position.coords.longitude);

  // const sunriseUnix = 1743188111;
  // const sunsetUnix = 1743142998;
  
  // function showSunTimes(sunriseUnix, sunsetUnix, timeZone) {
  //     console.log(`Sunrise (${timeZone}):`, new Date(sunriseUnix * 1000).toLocaleString('default', { timeZone }));
  //     console.log(`Sunset (${timeZone}):`, new Date(sunsetUnix * 1000).toLocaleString('default', { timeZone }));
  // }
  
  // showSunTimes(sunriseUnix, sunsetUnix, 'America/New_York');
  // showSunTimes(sunriseUnix, sunsetUnix, 'UTC');
  // console.log function showSunTimes()

  // const video = document.getElementById('video');

  // // Solicitamos acceso a la cámara web
  // navigator.mediaDevices.getUserMedia({ video: true })
  //     .then(stream => {
  //         // Asignamos el stream de video al elemento de video
  //         video.srcObject = stream;
  //     })
  //     .catch(error => {
  //         console.error('Error al acceder a la cámara web:', error);
  //     });


let agora = new Date();
  console.log(agora); // Data e hora actual



let dataDesdeTimestamp = new Date(1743401880); //Milisegundos
console.log(dataDesdeTimestamp); // Data correspondente



//   let timestampActual = Date.now();
// console.log(timestampActual); // Milisegundos desde 1970


// //obtener Ano
// const date = new Date();
// console.log(date.getFullYear()); // ten que dar 2025


// //obter Mes
// const date = new Date();
// console.log(date.getMonth()); // 2 (marzo, xa que os meses comezan en 0 XANEIRO

// // obter dia do mes
// const date = new Date();
// console.log(date.getDate()); // 30



// // obter a hora do día
// const date = new Date();
// console.log(date.getHours()); // 12


// Obter pronóstico por horas
async function obterPronostico(lat,lon){
  const url =`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric&lang=gl`
  
  try {
    const response = await fetch(url);
    const dataForecast = await response.json();
    console.log(dataForecast);
    procesarDatos(dataForecast);

} catch (error) {
  console.error("Error al obtener el pronóstico:", error);
}
}


console.log(obterPronostico(42.84, -8.57));


// procesar datos do pronóstico
function procesarDatos(dataForecast){
  const template = document.getElementById('forecast-template');
  const forecastContainer = document.getElementById('forecast-template');
  forecastContainer.innerHTML = '';

  dataForecast.list.forEach(item =>{
    const clone = template.content.cloneNode(true);

    clone.querySelector('#date').textContent = new Date(item.dt *1000).getHours()+ "h"
    clone.querySelector('#temperature').textContent = `${Math.round( item.main.temp)} ºC`;
    clone.querySelector('#weather-icon').src = `./assets/iconos/${item.weather[0].icon}.png`;
    clone.querySelector('#weather-icon').alt = item.weather[0].description;

    forecastContainer.appendChild(clone)
  });
}