/* Último  partido */

// Obter parámetros da URL
const params = new URLSearchParams(window.location.search);
const idTeam = params.get('idTeam');

function obtenerUltimoPartido(idTeam) { // Recibimos el ID del equipo como argumento
    fetch(`https://www.thesportsdb.com/api/v1/json/3/eventslast.php?id=${idTeam}`)
        .then(res => res.json())
        .then(data => {
            // La API de 'eventslast' devuelve un array 'events'
         
                const partido = data.results[0]; // Tomamos el último partido
                console.log(partido);
                mostrarPartido(partido);
           
        });
}

function mostrarPartido(partido) {
    document.getElementById('localClub').src = partido.strHomeTeamBadge;
    document.getElementById('localClub').alt = partido.strHomeTeam;
    document.getElementById('localResultado').textContent = partido.intHomeScore;

    document.getElementById('visitanteClub').src = partido.strAwayTeamBadge;
    document.getElementById('visitanteClub').alt = partido.strAwayTeam;
    document.getElementById('visitanteResultado').textContent = partido.intAwayScore;
    
}

obtenerUltimoPartido(idTeam)