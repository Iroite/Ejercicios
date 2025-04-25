const albums= [
    { src:"./assets/caratulas/albums/Acoustica.jpg", category:"albums", title:"Acoustica"},
    { src:"./assets/caratulas/albums/AnimalMagnetism.jpg", category:"albums", title:"Anima Manetism"},
    { src:"./assets/caratulas/albums/Blackout.jpg", category:"albums", title:"Blackout"},
    { src:"./assets/caratulas/albums/comeblack-scorpions.jpg", category:"albums", title:"Come Black Scorpions"},
    { src:"./assets/caratulas/albums/CrazyWorld.jpg", category:"albums", title:"Crazy World"},
    { src:"./assets/caratulas/albums/EyeIIEye.jpg", category:"albums", title:"Eye||Eye"},
    { src:"./assets/caratulas/albums/FaceTheHeat.jpg", category:"albums", title:"Face the Heat"},
    { src:"./assets/caratulas/albums/LoveAtFirstSting.jpg", category:"albums", title:"Love at first Sting"},
    { src:"./assets/caratulas/albums/Lovedrive.jpg", category:"albums", title:"Love Drive"},
    { src:"./assets/caratulas/albums/MomentOfGlory.jpg", category:"albums", title:"Moment of Glory"},
    { src:"./assets/caratulas/albums/PureInstinct.jpg", category:"albums", title:"Pure Instinct"},
    { src:"./assets/caratulas/albums/ReturnToForever.jpg", category:"albums", title:"Retrurn to Forever"},
    { src:"./assets/caratulas/albums/RockBeliever.jpg", category:"albums", title:"Rock Believer"},
    { src:"./assets/caratulas/albums/SavageAmusement.jpg", category:"albums", title:"Savage Amusement"},
    { src:"./assets/caratulas/albums/scorpions-humanity-hour.jpg", category:"albums", title:"Scorpions Humanity Hour"},
    { src:"./assets/caratulas/albums/StingInTheTail.jpg", category:"albums", title:"Sting in the Tail"},    

    {src:"./assets/caratulas/DVD/MTV-Unplugged-Live-In-Athens.jpg", category:"dvd", title:"MTV Unplugged Live in Athens"},
    {src:"./assets/caratulas/DVD/MOSCOW.jpg", category:"dvd", title:"Moscow"},
    {src:"./assets/caratulas/DVD/Live2011GetYourStingandBlackout.jpg", category:"dvd", title:"Live 2011 get your sting and Blackout"},
    {src:"./assets/caratulas/DVD/SCORPIONS_Unbreakable.jpg", category:"dvd", title:"Scorpions Unbreakable"},
    {src:"./assets/caratulas/DVD/scorpionsliveatwacken.jpg", category:"dvd", title:"Scorpions live at Wacken"},
    {src:"./assets/caratulas/DVD/UNBREAKABLE.jpg", category:"dvd", title:"UNBREAKABLE"},

    {src:"./assets/caratulas/compilations/BEST.jpg", category:"compilations", title:"BEST"}, 
    {src:"./assets/caratulas/compilations/Millennium.jpg", category:"compilations", title:"Millennium"},
]

const gallery= document.getElementById('gallery');
const filterButtons = document.querySelectorAll('.filter-btn');
  


// function showAll(){
//   };


  function createAlbumElement(album){
    const albumElement = document.createElement('div');
    albumElement.className = `album-item ${album.category}`;
    albumElement.innerHTML = `<img src="${album.src}" alt= "${album.title}">
    <p>${album.title}</p>`;
    return albumElement;
  }



//   function createshowDvd(dvd){
//     const showDvd = document.createElement('div');
//     showDvd.className = `dvd-item${dvd.category}`;
//     showDvd.innerHTML = `<img src="${dvd.src}" alt="${dvd.title}">
//     <p>${dvd.title}</p>`;
//     return dvd

//   };

//   function createCompilation(Compilations){
    
//     const compilationsElement = document.createElement('div');
//     compilations.className = `compilations-item ${compilations.category}`;
//     compilations.innerHTML = `<img src="${compilations.src}" alt= "${compilations.title}">
//     <p>${compilations.title}</p>`;
//     return compilations;

//   };

function displayAlbums(filter='all'){
    gallery.innerHTML="";
    albums.forEach(album=>{
        if(filter ==='all' ||  album.category===filter){
            gallery.appendChild(createAlbumElement(album));
        }} )
}

filterButtons.forEach(button=>{ button.addEventListener('click',()=>{
    filterButtons.forEach(btn=>btn.classList.remove('active'));
    button.classList.add('active');
    displayAlbums(button.getAttribute('data-filter'));
})})

displayAlbums();