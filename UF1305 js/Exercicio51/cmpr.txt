<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Exercicio 51</title>
</head>
<body>
  <div id="ingresarDatos">
    <input type="text" id="novaEntrada" placeholder="Escribe aquí"/>
    <button onclick="agregarElemento()">Añadir</button> 
    </div>
    <div>
    <ul id="lista">
    </ul>  
    </div>
 <script src="js/script.js"></script>
</body>
</html>


js
var entradaLista;
var listaHTML;

entradaLista=document.getElementById("novaEntrada")
listaHTML=document.getElementById("lista")

ultimoTexto=localStorage.getItem("ultimoTexto")
entradaLista.value=ultimoTexto;

/*pendiente:		let listaTotal = "ultimotexto" 
 listaHTML.LocalStorage.setItem("ultimotexto";*/

function agregarElemento () {
 var novoTexto;
 var novoElemento;
 novoTexto=entradaLista.value
 novoElemento=document.createElement("li");
 novoElemento.innerText=novoTexto;
 listaHTML.appendChild(novoElemento);
 localStorage.setItem("ultimoTexto",novoTexto);
 } 


css:
