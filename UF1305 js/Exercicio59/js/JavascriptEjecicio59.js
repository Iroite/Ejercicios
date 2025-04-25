// document.addEventListener('DOMContentLoaded', function () {
//     // Obter referencias aos elementos do DOM
//     var azul = document.getElementById('azul');
//     var branco = document.getElementById('branco');
//     var negro = document.getElementById('negro');
//     var grisoscuro = document.getElementById('grisoscuro');
//     var amarelo = document.getElementById('amarelo');

//     var boton__azul = document.getElementById('boton__azul');
//     var boton__branco = document.getElementById('boton__branco');
//     var boton__negro = document.getElementById('boton__negro');
//     var boton__grisoscuro = document.getElementById('boton__grisoscuro');
//     var boton__amarelo = document.getElementById('boton__amarelo')
//     // Funcións para amosar tarxetas
//     function amosarazul() {
//         azul.style.display = 'block';
//         branco.style.display = 'none';
//         negro.style.display = 'none';
//         grisoscuro.style.display = 'none';
//         amarelo.style.display = 'none';
//     }
//     function amosarbranco() {
//         azul.style.display = 'none';
//         branco.style.display = 'block';
//         negro.style.display = 'none';
//         grisoscuro.style.display = 'none';
//         amarelo.style.display = 'none';
//     }
  
//     function amosarnegro() {
//         azul.style.display = 'none';
//         branco.style.display = 'none';
//         negro.style.display = 'block';
//         grisoscuro.style.display = 'none';
//         amarelo.style.display = 'none';
//     }
  
//     function amosargrisoscuro() {
//         azul.style.display = 'none';
//         branco.style.display = 'none';
//         negro.style.display = 'none';
//         grisoscuro.style.display = 'block';
//         amarelo.style.display = 'none';
//     }
//     function amosaramarelo() {
//         azul.style.display = 'none';
//         branco.style.display = 'none';
//         negro.style.display = 'none';
//         grisoscuro.style.display = 'none';
//         amarelo.style.display = 'block';
//         }
//     // Asignar funcións aos eventos de clic
//     boton__azul.addEventListener('click', amosarazul);
//     boton__branco.addEventListener('click', amosarbranco);
//     boton__negro.addEventListener('click', amosarnegro);
//     boton__grisoscuro.addEventListener('click', amosargrisoscuro);
//     boton__amarelo.addEventListener('click', amosaramarelo)
//   }); 
  
//   if(display = 'none'){
//     azul.style.display = 'block';
//     branco.style.display = 'none';
//     negro.style.display = 'none';
//     grisoscuro.style.display = 'none';
//     amarelo.style.display = 'none'}

const car = document.getElementById("car");
const carAmarelo =document.getElementById ("carAmarelo")
const carAzul = document.getElementById("carAzul")
const carNegro = document.getElementById("carNegro")
const carGris = document.getElementById("carGris")
const carBranco = document.getElementById("carBranco")
function mostrarCoche(color){

    switch (color) {
        case "amarelo":

        car.src = "../assets/img/color_cars_img/amarelo.avif";
    
        carAmarelo.src="../assets/img/colors_btn/color_amarelo_active.svg"    
        carAzul.src ="../assets/img/colors_btn/color_azul.svg"     
        carNegro.src ="../assets/img/colors_btn/color_negro.svg"
        carBranco.src ="../assets/img/colors_btn/color_branco.svg"     
        carGris.src ="../assets/img/colors_btn/color_grisoscuro.svg"     

            break;

      case "azul":

       car.src = "../assets/img/color_cars_img/azul.avif";
              carAzul.src ="../assets/img/colors_btn/color_azul_active.svg" 
              carAmarelo.src="../assets/img/colors_btn/color_amarelo.svg"    
                carNegro.src ="../assets/img/colors_btn/color_negro.svg"
            carBranco.src ="../assets/img/colors_btn/color_branco.svg"     
            carGris.src ="../assets/img/colors_btn/color_grisoscuro.svg"     
    
            break;
        case "negro":

        car.src = "../assets/img/color_cars_img/negro.avif";
        carNegro.src ="../assets/img/colors_btn/color_negro_active.svg"
        carAmarelo.src="../assets/img/colors_btn/color_amarelo.svg"    
        carAzul.src ="../assets/img/colors_btn/color_azul.svg"     
        carBranco.src ="../assets/img/colors_btn/color_branco.svg"     
        carGris.src ="../assets/img/colors_btn/color_grisoscuro.svg"  
        
      

                 break;

        case "branco":

        car.src = "../assets/img/color_cars_img/branco.avif";
        carBranco.src ="../assets/img/colors_btn/color_branco_active.svg"     
        carAmarelo.src="../assets/img/colors_btn/color_amarelo.svg"    
        carAzul.src ="../assets/img/colors_btn/color_azul.svg"     
        carNegro.src ="../assets/img/colors_btn/color_negro.svg"     
        carGris.src ="../assets/img/colors_btn/color_grisoscuro.svg"     
break;
        case "gris":

        car.src = "../assets/img/color_cars_img/grisoscuro.avif";
        carGris.src ="../assets/img/colors_btn/color_grisoscuro_active.svg"    
        carAmarelo.src="../assets/img/colors_btn/color_amarelo.svg"    
        carAzul.src ="../assets/img/colors_btn/color_azul.svg"     
        carNegro.src ="../assets/img/colors_btn/color_negro.svg"
        carBranco.src ="../assets/img/colors_btn/color_branco.svg"        
 
                           break;
        default:
            break;
    }

}


document.getElementById('fade').onclick = function() {
    this.style.opacity = '0';
    setTimeout(() => {
        this.style.display = 'none';
    }, 1); // Match the transition duration
};