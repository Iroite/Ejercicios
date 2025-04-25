//definir función para suar, restar, multipiicar e dividir
function sumar(a,b){
    return a+b;
}
//restar
function restar(a,b){
    return a-b;
}
//funcion multiplicar
function multiplicar(a,b){
    return a * b;
}
//función dividir
function dividir (a,b){
    // manexar a división por 0
    if (b !==0){
    return a/b;
 } else{
    return"Erro: Non se pode dividir por 0.";
 }}
 // exemplos de uso das función
 console.log("suma:" + sumar(5,3));
 console.log("resta:" + restar(1,4));
 console.log("multiplicar:" + multiplicar(2,6));
 console.log("dividir:" + dividir(10,2));
 //obter referencias aos elementos DOM
 const inputNumero1= document.getElementById("numero1");
 const inputNumero2= document.getElementById("numero2");
 const resultadosDiv= document.getElementById("resultados");

 //Función para realizar operación e amosar resultados
 function realizarOperacions(){
    //obter os valores dos campos de entrada
    const numero1 = parseFloat(inputNumero1.value);
    const numero2 = parseFloat(inputNumero2.value);

//verificar se os valores son válidos
if (isNaN(numero1)  || isNaN(numero2)){
    resultadosDiv.textContent ="Por favor, introduce números válidos.";
    return;
}
resultadosDiv.textContent = `Suma:${sumar(numero1,numero2)} Resta:${restar(numero1,numero2)} Multiplicación:${multiplicar(numero1,numero2)} División:${dividir(numero1,numero2)}`;
 }