//mostrar lista orixinal
const estudantes=["juan","María","Pedro", "Ana", "Luis","Elena", "Carlos","Laura"]

const container = document.getElementById("container")

container.innerHTML = estudantes.join(", ")


// Actividade 1
const estudantesActividade1 = ['juan','María','Pedro', 'Ana', 'Luis','Elena', 'Carlos','Laura']
const nomesLargos = estudantesActividade1.filter(estudante => estudante.length > 4);

console.log(nomesLargos); 

container.innerHTML+= "<p>" + nomesLargos.join(", ") + "</p>"
container.innerHTML+= `<p> ${nomesLargos.join(", ")} </p>`
//actividade 2-1



let maiusculas = ["juan","María","Pedro", "Ana", "Luis","Elena", "Carlos","Laura"]
let listaMaiusculas = maiusculas.map(nome => nome.toUpperCase());
console.log (listaMaiusculas);


//Actividade 2-2

// let maiusculas2 = ["juan","María","Pedro", "Ana", "Luis","Elena", "Carlos","Laura"]
// Let listaMayusculas = [];
// maiusculas2.forEach(nome => {
//     listaMayusculas.push (nome.toUpperCase/());
// console.log(listaMayusculas)
// });


//Actividade 3



let nomes = ["juan","María","Pedro", "Ana", "Luis","Elena", "Carlos","Laura"]
let ultimoNome = nomes.pop();
console.log(nomes);


// Actividad 4

let nombre = ["juan","María","Pedro", "Ana", "Luis","Elena", "Carlos","Laura"]
 nombre.push("Francisco")


container.innerHTML+= `<p> ${nombre.join(", ")} </p>`


// Actividad 5

let parcial = ["juan","María","Pedro", "Ana", "Luis","Elena", "Carlos","Laura"]
let porcion = parcial.slice(2,4);
 container.innerHTML+= `<p> ${porcion.join(", ")} </p>`


 //Actividad 6
 let alumna = ["juan","María","Pedro", "Ana", "Luis","Elena", "Carlos","Laura"]
alumna.unshift("Irene");

 container.innerHTML+= `<p> ${alumna.join(", ")} </p>`


 //Actividad /

 let listaxe = ["juan","María","Pedro", "Ana", "Luis","Elena", "Carlos","Laura"]
const novaListaxe =["Paula", "Raúl"]
let estudantesNovos = listaxe.concat(novaListaxe)

container.innerHTML+= `<p> ${estudantesNovos.join(", ")} </p>`