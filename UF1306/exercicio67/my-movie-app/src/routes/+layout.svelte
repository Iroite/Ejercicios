<script>

  import Header from "$lib/components/Header.svelte";

</script>


<Header></Header>

<slot></slot>

<style>

@font-face{
    font-family: Poppins;
    src:"my-movie-app/src/routes/fonts/Poppins.ttf"
  }

  :root{
    --font-pimary: Poppins;
  }

:global(*) {
  margin: 0.5rem;
  padding: 0;
  outline: 0;
  box-sizing: border-box;
}

:global(html){
    font-size: 10px;
}

:global(body){
 background: url('image/imgenG.jpg');
 color: black;
 -webkit-font-smoothing: antialiased;
}
/* 
(../../static/video/videoplayback.mp4) con esta ruta no funciona

:global(body){
  <video autoplay loop muted playsinline id="video_background" style="position: fixed; top: 0; left: 0; width: 100%; height: 100%; z-index: -1;">
  <source src="../../static/video/videoplayback.mp4" type="video/mp4">
  Tu navegador no soporta el formato de video
</video>} */

:global(body, input, button) {
 font-size: 1.5rem;
 font-family: var(--font-pimary);
}

:global(input){
  height: 5rem;
  width: 30rem;
  background-color: brown;
  color:bisque;
  border:brown;
  border-radius: 0.5rem 0rem 0rem 0.5rem;
  font-weight: 600;
  margin-left: 40%;
}

:global(button) {
 cursor: pointer;
 width: 17rem;
 height: 5rem;
 margin-right: 33%;
 background-color: chocolate;
 border:chocolate;
 border-radius: 0rem 0.5rem 0.5rem 0rem;
 color: bisque;
}


/* 
 p {
  text-align: center;
  font-size: 2rem;
}


a{ 
  display: flex;
  flex-direction: row;
  text-align: center;
  font-size:2rem;
  background-color: navy;
  color:aliceblue;
  text-decoration: double;
}
h1{
  color:chocolate;
  background-color: bisque;

}
span{
  font-weight: 900;
}
 */


</style>

