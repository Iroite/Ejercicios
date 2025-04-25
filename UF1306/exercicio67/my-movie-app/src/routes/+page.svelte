
<script>
    const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
    
    let searchTerm = '';
    let movies = [];

    const searchMovies = async () => {
        const response = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${searchTerm}&include_adult=false&language=es-ES&page=1`)
        const data  = await response.json();
        movies = data.results;

    };
    
</script>

<main>
    <input bind:value={searchTerm} placeholder="Búsqueda de películas"/>
    <button on:click={searchMovies}>Buscar</button>

    {#if movies.length >0}
    <ul>
        {#each movies as movie (movie.id)}
        <li>
            <img src='https://image.tmdb.org/t/p/w500{movie.poster_path}' alt={movie.title} />
            <h1>{movie.title}</h1>
            <p><span id="sinopsis">Sinopsis:</span> {movie.overview}</p>
            <!-- <p>{movie.adult}</p> -->
            <p><span>Fecha estreno:</span> {movie.release_date}</p>
            <p><span>Título original:</span> {movie.original_title}</p>
            <p><span>Valoración Media:</span> {movie.vote_average}</p>
            <p><span>Espectadores:</span> {movie.popularity}</p>
            <p id="lingua"><span>Idioma Original:</span> {movie.original_language}</p> 
            
            <p><span>Género</span>  {movie.genre_ids}  </p>
            <p id="link"><a id="enlace" href="/id">Ver detalles</a></p>
          </li>
        {/each}
    </ul>
    {:else}
    <p>Non atopamos ningunha película</p>
    {/if}

   
</main>
<style>
:placeholder-shown{
    text-align: center;
    
}
p {
  text-align: justify;
  margin-left: 40%;
  margin-right: 33%;
  font-size: 2rem;
  border:1rem solid  chocolate;
  background-color: chocolate;
}

img{
    margin-left: 40%;
    border: 0.1rem solid chocolate;

}

a{
  text-align: center;
  font-size: 2rem;
  background-color: navy;
  color:aliceblue;
  text-decoration: none;
}

h1{
 text-align: center;
 margin: 0rem 33% 0rem 40%;
 color:chocolate;
 background-color: bisque;

}
span{
  font-weight: 900;
}

#lingua{
  text-transform: uppercase;
}
#enlace{
  background-color: brown;

}
#link{
  background-color: brown;
  text-align: center;
  border: 0.2rem solid brown;
}
</style>