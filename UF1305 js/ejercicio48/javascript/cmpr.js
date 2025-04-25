// saudo 

function saudar (){
    var nomes = prompt("Introduce o teu nome");
    alert("ola," + nomes + "!");
    }
    
    
    
// ejercicio 2: suma dos números
function suma(){
    var num1 =parseFloat(prompt("Introduce o primeiro número"));
    var num2 =parseFloat(prompt("Introduce o segundo número"));
    var suma = num1 + num2;
    alert("A suma é: "+ suma);
    }
    
//ejercicio Táboa de multiplicar
function tabla(){
    var numero = parseInt(prompt("Introduce un número para ver a súa táboa de multiplicar"));
    
    for(let i = 1; i <= 10; i++){
        console.log(numero + " x " + i + "=" + numero * i )
    }
}


//verificación de número par o impar

function par(){
var numero =parseInt(prompt("Introduce un numero"));
if (numero % 2 === 0){
    alert("O número é par");
} else {
    alert("O número é impar")
}
}
