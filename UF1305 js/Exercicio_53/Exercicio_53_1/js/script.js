//exercicio 53-1

/*
Notas
Sobresaliente:90
Nostable:70
Aprobado: 50
Insuficiente:0
 */
function mostrarResultado(){
let nome = document.getElementById("nome").value;
let nota = parseFloat( document.getElementById("nota").value);
let resultado = document.getElementById("resultado");

if( nota >=90){
    resultado.textContent = `${nome} é Sobresaínte`;
}else if( nota>=70){
    resultado.textContent = `${nome} é Notable`;
}else if( nota >=50){
    resultado.textContent = `${nome} é Aprobado`;
}else {
    resultado.textContent = `${nome} é Insuficiente`;
}
}