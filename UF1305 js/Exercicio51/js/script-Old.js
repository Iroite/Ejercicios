
var entradaLista;
var listaHTML;

entradaLista=document.getElementById("novaEntrada")
listaHTML=document.getElementById("lista")

ultimoTexto=localStorage.getItem("ultimoTexto")
entradaLista.value=ultimoTexto;


function agregarElemento () {
 var novoTexto;
 var novoElemento;
 novoTexto=entradaLista.value
 novoElemento=document.createElement("li");
 novoElemento.innerText=novoTexto;
 listaHTML.appendChild(novoElemento);
 localStorage.setItem("ultimoTexto",novoTexto);
 } 


 //guardar datos localStorage.setItem('clave','valor');

// Exemplo con obxetos
 //     const usuario ={ nome:'Ana', Idade:25}
 //     localStorage.setItem('usuario', JSON.stringify(usuario));


//recuperar datos
const valor =LocalStorage.getItem('clave');

//recuperar datos con obxetos
//const usuario = JSON.parse(localStorage.getItem('usuario'));

function borrarelemento (){
var ultimoTexto;
ultimoTexto
}
// eliminar un dato especifico:
localStorage.removeItem('ultimoTexto');


//limpiar pantalla(eliminar todos los datos)
LocalStorage.clear();
 

//obter unha clave por índice para racuperar un dato nunha posición específica dentro da memoria
const clave=localStorage.key(0);

