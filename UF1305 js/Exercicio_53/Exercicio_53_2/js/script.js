//exercicio 53-2
function comprobarIdade(){
    let nome = document.getElementById("nome").value;
    let idade = parseFloat(document.getElementById("idade").value);
    let resultado = document.getElementById("resultado");

if(idade >= 18) {
 resultado.textContent = `${nome} pode votar`;
}else{
    resultado.textContent = `${nome} non pode votar`;
}

}