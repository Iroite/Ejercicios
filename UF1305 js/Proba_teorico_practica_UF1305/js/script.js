const edad = 40;

console.log(edad)



document.addEventListener('DOMContentLoaded', (event) => {
    const button = document.getElementsByClassName('card__boton');

    button.addEventListener('click', () => {
        button.classList.toggle('active');
    });
});







//definimos cada un dos obxetos cos seus atributos que son 

        let 296GTB = {
            logo:"../assets/img/Logo_296GTB.avif",
            modelo: "../assets/img/296GTB.avif",
            potencia:830CV ,
            motor: "V6 Biturbo + MGU-k (eléctrico)",
            aceleración:"0 a 100km/h en 2,9s"};

           
        let 812GTS = {
            logo:"../assets/img/Logo_812GTS.avif",
            modelo: "../assets/img/812GTS.avif",
            potencia:"730CV" ,
            motor: "V12 Biturbo",
            aceleración:"0 a 100km/h en 2,9s"};
        
        let purosangue = {
                logo:"../assets/img/Logo_Purosangue.avif",
                modelo: "../assets/img/Purosangue.avif",
                potencia:"725CV"  ,
                motor: "V12 + MGU-k (elécrico)",
                aceleración:"0 a 100km/h en 3,5s"};

        let spider = {
                    logo:"../assets/img/Logo_SF90_Spider.avif",
                    modelo: "../assets/img/SF90_Spider.avif",
                    potencia: "1000CV (780cv+ 220CV*3)",
                    motor: "V8 + 3 motores MGU-k (eléctrico",
                    aceleración:"0 a 100km/h en 2,5s"};
            console.log(let)



               // Seleccionamos el botón por su ID
const boton = document.getElementById('card__boton');

// Definimos la función que queremos ejecutar al hacer clic
function mostrarCoche() {
    
}

// Asignamos la función al evento onclick del botón
boton.onclick = mostrarCoche;
     