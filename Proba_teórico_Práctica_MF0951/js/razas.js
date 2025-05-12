const razas = {
    "Protoss": {
      "nome": "Protoss",
      "descricion": "Durante milleiros de anos, os antigos e misteriosos protoss dominaron a súa parte da galaxia. Os guerreiros protoss non teñen igual en destreza e valor, grazas á combinación da tecnoloxía coa súa formidable forza psiónica.",
      "imaxeFondo": "./razas/protoss_background_1600_desktop.avif",
      "imaxeFondoMobile": "./razas/races_protoss_960_mobile.avif",
      "iconoBotonDefault": "./icons/protoss_icon_default.avif",
      "iconoBotonActive": "./icons/protoss_icon_active.avif"
    },
    "Terran": {
      "nome": "Terran",
      "descricion": "Prácticamente acabados de chegar ao sector Koprulu, os terran son os descendentes dunha desastrosa expedición de colonización que partiu da Terra hai séculos. Sen a avanzada tecnoloxía dos protoss nin o talento natural dos zerg, as forzas militares terran apóianse nunha variada combinación de unidades versátiles e resistentes para superar aos seus rivais.",
      "imaxeFondo": "./razas/terran_background_1600_desktop.avif",
      "imaxeFondoMobile": "./razas/races_terran_960_mobile.avif",
      "iconoBotonDefault": "./icons/terran_icon_default.avif",
      "iconoBotonActive": "./icons/terran_icon_active.avif"
    },
    "Zerg": {
      "nome": "Zerg",
      "descricion": "Liderados pola astuta Raíña de Espadas, os alieníxenas zerg teñen a intención de desatar os seus horrores pola galaxia e consumir a todo aquel que se interponga no seu camiño. Os zerg non empregan tecnoloxía para crear as súas armas, armaduras e naves estelares. No seu lugar, esas funcións cúmprenas de forma eficiente mediante adaptación biolóxica e mutación planificada.",
      "imaxeFondo": "./razas/zerg_background_1600_desktop.avif",
      "imaxeFondoMobile": "./razas/races_zerg_960_mobile.avif",
      "iconoBotonDefault": "./icons/zerg_icon_default.avif",
      "iconoBotonActive": "./icons/zerg_icon_active.avif"
    }
  }
           

  //funcioin cambiar raza
let nome = document.getElementById("nome");
let descricion = document.getElementById("descricion");
// let buttons = document.querySelectorAll(".razas");//
let imgfondo = document.getElementById("imaxeFondo");


let razas__btn1 = document.getElementById("razas__btn1");
let razas__btn2 = document.getElementById("razas__btn2");
let razas__btn3 = document.getElementById("razas__btn3");

// al hacer click cambia el boton activo
buttons.forEach(button => {
  button.addEventListener('click', () => {
    buttons.forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');
  });
});

//función a ejecutar al hacer Click en los botones!!!!
function cambiarRaza(raza) {

  switch (raza) {
      case "Protoss":
        imaxe.src = razas["Protoss"].imaxeFondo;
        nome.textContent = razas["Protoss"].nome;
        descricion.textContent = razas["Protoss"].descricion;

        razas__btn1.classList.add("active");
        razas__btn2.classList.remove("active");
        razas__btn3.classList.remove("active");


        break;
      
        case "Terran":
          imaxe.src = razas["Terran"].imaxeFondo;
          nome.textContent = razas["Terran"].nome;
          descricion.textContent = razas["Terran"].descricion;
  
          razas__btn1.classList.remove("active");
          razas__btn2.classList.add("active");
          razas__btn3.classList.remove("active");

      break;


      case "Zerg":
        imaxe.src = razas["Zerg"].imaxeFondo;
        nome.textContent = razas["Zerg"].nome;
        descricion.textContent = razas["Zerg"].descricion;

        razas__btn1.classList.remove("active");
        razas__btn2.classList.remove("active");
        razas__btn3.classList.add("active");

    break;

    default:
      imaxe.src = "Error";
      nome.textContent = "Error";
      descricion.textContent = "Error";

      break;
  }
}