const modal= document.getElementById("modal")

function openModal(){
modal.style.display="block"
}

function closeModal(){
    modal.style.display="none"
}

const close = document.getElementById("pecharModal")
close.addEventListener("click", closeModal)

// document.getElementById("trailer").addEventListener("click", () => {
//     document.getElementById("modal").style.display="block"
// })

const series = [
  { "id":"loki",
    "image":"url(../fondo_Loki.png)",
    "logo":"../Logos/logo_loki.png",
    "edad": "../iconos/12+.png",
    "audio": "../iconos/audiodescripcion.png",
    "subtitulos":"../iconos/subtitulos.png",
    "info":"2021 - 2023 • 2 temporadas",
    "resume":"Ciencia ficción,Fantástica, Superhéroe,Acción y aventura",
    "sinopsis":'La nueva serie "Loki", de Marvel Studios, empieza allí donde terminó "Vengadores: Endgame". En ella, el voluble villano Loki (Tom Hiddleston) vuelve a ganarse el apodo de Dios del Engaño. Kate Herron es su directora y Michael Waldron el guionista principal.',
    "iframe":'<iframe  src="https://www.youtube.com/embed/fM7v_IFaH1g?si=1v6SjSn8FhaR5vI4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
    "boton": "<button class='trailer__buttom' id='trailer' onclick='botonTrailer(0)' >Ver Trailer</button>"
  },
  
  // { "id":"lupin",
  //   "image":"url(../fondo_lupin.png)",
  //   "logo": "../Logos/logo_lupin.png",
  //   "edad": "../iconos/12+.png",
  //   "audio": "../iconos/audiodescripcion.png",
  //   "subtitulos":"../iconos/subtitulos.png",
  //   "info":"2021 - 2023 • 3 temporadas",
  //   "resume":"Drama, Misterio, Policiaca",
  //   "sinopsis":'Asumir la identidad de un ladrón de guante blanco es el plan de Assane Diop para vengar a su padre.',
  //   "iframe":'iframeurl',
  //   "boton": "<button class='trailer__buttom' id='trailer' onclick='botonTrailer(0)' >Ver Trailer</button>"
  // },
  
  {"id":"percy",
    "image":"url(../fondo_percy.png)",
    "logo": "../Logos/logo_percy.png",
    "edad": "../iconos/12+.png",
    "audio": "../iconos/audiodescripcion.png",
    "subtitulos":"iconos/subtitulos.png",
    "info":"2023 • 1 temporada",
    "resume":"Familiar, Fantástica, Acción y aventura",
    "sinopsis":'Percy Jackson emprende una peligrosa misión. Dejando atrás a los monstruos y burlando a los dioses, recorrerá Estados Unidos para devolver el Rayo Maestro de Zeus y evitar la guerra. Con ayuda de sus compañeros de misión, Annabeth y Grover, el viaje de Percy lo acercará más a las respuestas que busca: cómo encajar en un mundo que le es ajenoy si logrará entender su destino.',
    "iframe":'<iframe width="560" height="315" src="https://www.youtube.com/embed/xZMSjnLHJl4?si=cSOysrtCh0cfjlvC" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
    "boton": "<button class='trailer__buttom' id='trailer' onclick='botonTrailer(1)' >Ver Trailer</button>"
  },
  
  { "id":"madalorian",
    "image":"url(../fondo_mandalorian.png)",
    "logo": "../Logos/logo_mandalorian.png",
    "edad": "../iconos/12+.png",
    "audio": "../iconos/audiodescripcion.png",
    "subtitulos":"../iconos/subtitulos.png",
    "info":"2019 - 2023 • 3 temporadas",
    "resume":"Ciencia ficción, Acción y aventura",
    "sinopsis":'Tras la caída del Imperio, un solitario Mandaloriano viaja por una galaxia sin ley con su protegido: Grogu.',
    "iframe":'<iframe width="560" height="315" src="https://www.youtube.com/embed/piXRBQCKzQI?si=adlm1PwcC2wERg90" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
    "boton": "<button class='trailer__buttom' id='trailer' onclick='botonTrailer(2)' >Ver Trailer</button>"
  },
  { "id":"asesinatos",
    "image":"url(../fondo_asesinatos.png)",
    "logo": "../Logos/logo_solo_asesinatos.png",
    "edad": "../iconos/16+.png",
    "audio": "../iconos/audiodescripcion.png",
    "subtitulos":"../iconos/subtitulos.png",
    "info":"2021 - 2023   •   3 temporadas",
    "resume":"Misterio, Drama, Comedia, Policiaca",
    "sinopsis":'A los vecinos del Upper West Side Charles, Oliver y Mabel les une su pasión por los crímenes reales. Cuando un residente de su edificio muere, el trío decide resolver el misterio y grabar un podcast relatándolo.',
    "iframe":'<iframe width="560" height="315" src="https://www.youtube.com/embed/kmgT20OXV1o?si=L141Q7cJXL8F55WE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
    "boton": "<button class='trailer__buttom' id='trailer' onclick='botonTrailer(3)' >Ver Trailer</button>"
  }
]

function botonTrailer(serie){
document.getElementById("trailer").innerHTML = series[serie].iframe;
document.getElementById("trailer").innerHTML = series[serie].boton;

// document.getElementById("trailer").style.display="block"
}

function botonSeries(serie) {

  document.getElementById("id__loki").src = series[serie].logo;
  document.body.style.backgroundImage=series[serie].image;
  document.getElementById("edad__info").src = series[serie].edad;
  document.getElementById("audio__info").src = series[serie].audio;
  document.getElementById("subtitle__info").src = series[serie].subtitulos;
  document.getElementById("info__text").textContent = series[serie].info;
  document.getElementById("info__tema").textContent = series[serie].resume;
  document.getElementById("info__sinopsis").textContent = series[serie].sinopsis

}