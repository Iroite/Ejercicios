
// fetch('https://www.thesportsdb.com/api/v1/json/3/searchteams.php?t=Obradoiro%20CAB')
//  .then(res => res.json())
//  .then(data => {
//  if (!data.teams) {
//  document.getElementById('resultado').innerHTML = 'Equipo no encontrado';
//  return;
// }
// const equipo = data.teams[0];
// const idEquipo = equipo.idTeam;
// obtenerUltimoPartido(idEquipo, equipo.strTeam);
// });

function obtenerEquipos() {
    fetch(`https://www.thesportsdb.com/api/v1/json/3/search_all_teams.php?l=Spanish%20La%20Liga`)
    .then(res => res.json())
    .then(data => {
    let template = document.querySelector('#templateEquipos');
        let todos = document.getElementById('todos');
        const equipos = data.teams;

        equipos.forEach(item => { 
    
        let clone = template.content.cloneNode(true);
        
        clone.querySelector('#botonClub').href =  `/estadisticas.html?idTeam=${item.idTeam}`;
        clone.querySelector('#escudoEquipo').src =  item.strBadge;
        clone.querySelector('#escudoEquipo').alt = item.strTeam;
        clone.querySelector('#nomeClub').textContent = item.strTeam;
        
        
        todos.appendChild(clone);
        });
    });
   
}

obtenerEquipos()




