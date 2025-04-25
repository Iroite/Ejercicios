

// saudo 

function saudar (){
var nomes = prompt("Introduce o teu nome");
alert("ola," + nomes + "!");
}



// ejercicio 2: suma dos números
var num1 =parseFloat(prompt("Introduce o primeiro número"));
var num2 =parseFloat(prompt("Introduce o segundo número"));
var suma = num1 + num2;
alert("A suma é: "+ suma);



//ejercicio Táboa de multiplicar
var numero = parseint(prompt("Introduce un número para ver a súa táboa de multiplicar"));

for (let i = 1;i <= 10; i++){
    console.group(numero + " x " +i+ "=" + numero * i);
}
//