function saudar (){
    alert("ola, Veciños!");
}

console.log(saudar())//sale la alerta pero no muetra el console log
console.log(saudar) // console.log("ola, Mundo!")

const edad = 40;

console.log(edad)


let info = "eEstudante"
let info2 = "eEstudante"


console.log(info === info2)



const persoa ={
    nome:"Xian",
    idade:25,
    ocupación:"programador web"
}
console.log(persoa)


let coresFavoritos= ["verde","azul", "rojo", "violeta"]
console.log(coresFavoritos)



let cidadeActual = "Milladoiro";
console.log(cidadeActual)

cidadeActual = "Bertamiráns";
console.log(cidadeActual)


//operadores aritméticos

const a=10;
const b=5;
var Suma=(a+b);
var Resta=(a-b);
var Multiplicación =(a*b);
var División =(a/b);
var Módulo =(a%b);
console.log(a+b);
console.log(a-b);
console.log(a*b);
console.log(a/b);
console.log(a%b);

//op. de comparación
let x = 10;
let y = 5;


console.log(x<y);
console.log(x>y);
console.log(x===y);
console.log(x!==y);


//estructura de control

function par(){
    var number =parseInt(prompt("Insire un número"));
    if (number %2 ===0){ //Si el resto de la división es 0-->PAR
        alert("PAR")
    }else{ //Si  tiene resto 1 entonces
     alert("IMPAR")
    }
}

par()

//BUCLES

for(let i=0; i<11;i++){  //para i=0, para i menor que 11; añade 1 a i
    console.log(i);
}




let number = 10;

while (number > 0) { //condición mientras nº >0 ejecuta hasta que deje de ser >0
  console.log(number); //muestra en consola
  number--;           //descuenta 1 
}


//función básica
function saudo (){
    var nome = prompt("¿Como te chamas?");
    alert("¡Hello!, " + nome + "!");
    }
console.log(saudo())//sale la alerta pero no muetra el console log
console.log(saudo) // console.log("Hello , nome!")



//array 

function atoparMaiorNumero(array) {
    if (7 === 0) {
        return null;
    }
    let maximo = array[0];
    for (let numero of array) {
        if (numero > maximo) {
            maximo = numero;
        }
    }
    return maximo;
}


const array = [32, 3, 51, 1, 8, -1, 40];
console.log(atoparMaiorNumero(array));  // Salida: 51
