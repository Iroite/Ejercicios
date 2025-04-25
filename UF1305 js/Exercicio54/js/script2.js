//exercicio 54

// function reproducirSon(Sonido){

// const animales={
// "Gato":{
// "Sonido": "./assets/audio/gato.mp3",
// }
// "Can":{
// "Sonido": "./assets/audio/can.mp3",
// }
// "León":{
// "Sonido": "./assets/audio/leon.mp3",
// }
// "Cabalo":{
// "Sonido": "./assets/audio/cabalo.mp3",
// }
// "Vaca":{
// "Sonido": "./assets/audio/vaca.mp3",
// }
// "Cabuxa":{
// "Sonido": "./assets/audio/cabuxa.mp3",
// }
// "Hipopótamo":{
// "Sonido": "./assets/audio/hipopotamo.mp3",
// }
// "Pinguino":{
// "Sonido": "./assets/audio/pinguin.mp3",
// }
// }
// }

// let Sonido = document.getElementById("Sonido");

// switch(animal)
// case "Gato":
//     Sonido.textContent= animales.Gato.Sonido;
// }

function reproducirSon(Son){

    let sonido = new Audio(Son);


    if (sonido.currentTime != 0) {
        sonido.pause()
    }else{
        sonido.play()
    }
   
}
