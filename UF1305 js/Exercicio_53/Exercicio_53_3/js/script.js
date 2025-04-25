// Exercicio 53- 3 deidades romanas da semana
function mostrarDeidades(dia){

    const deidades={
        "Luns":{
            "Deus":"Luns á Lúa", 
            "Descrición": "O luns estaba dedicado á Dusa Romana Lúa, unha deidade primitiva que foi substituida posteriormente pola deusa Diana"

        },
        "Martes":{
            "Deus":" Martes a Marte",
            "Descrición": " O martes estaba adicado a Marte o deus da guerra"
        },
        "Mércores":{
            "Deus":" Mércores a Mercurio",
            "Descrición": "O Mércores estaba adicado a Mercurio o deus do comercio"
                },
     
         "Xoves":{
            "Deus":"Xoves á Xupiter", 
            "Descrición": "O Xoves estaba dedicado á Xupiter, o deus principal e surpremo"
    },
        "Venres":{
            "Deus":"Venres a Venus",
             "Descrición": "O Venres estaba dedicado a dusa Venus, a deusa do amor e do desexo"
    },
        "Sábado":{
            "Deus":"sabado á Saturno", 
            "Descrición": "O Sábado estaba adicado Saturno, aínda que o nome nos chega da cultura xudeo-cristiá onde significa 'día de repuso'"

    },
        "Domingo":{
            "Deus": "Domingo á Apolo", 
            "Descrición": "O Domingo estaba adicado o Deus Romano Apolo o deus do sol e da sabedoría, mótivo polo cal foi elixido polos cristiáns para establecer o Dominus dei ou día do Señor"

    }
}

let deus = document.getElementById("deus");
let descricion = document.getElementById("descricion")

switch (dia){
    case "Luns":
    deus.textContent = deidades.Luns.Deus;
    descricion.textContent= deidades.Luns.Descrición;
    break;

    case "Martes":
    deus.textContent = deidades.Martes.Deus;
    descricion.textContent= deidades.Martes.Descrición;
    break;

    case "Mércores":
    deus.textContent= deidades.Mercores.Deus;
    descricion.textContent= deidades.Mercores.Descrición;
    break;

    case "Xoves":
    deus.textContent= deidades.Xoves.Deus;
    descricion.textContent= deidades.Xoves.Descrición;
    break;

    case "Venres":
    deus.textContent= deidades.Venres.Deus;
    descricion.textContent= deidades.Venres.Descrición;
    break;

    case "Sábado":
    deus.textContent= deidades.Sábado.Deus;
    descricion.textContent= deidades.Sábado.Descrición;
    break;

    case "Domingo":
    deus.textContent= deidades.Domingo.Deus;
    descricion.textContent= deidades.Domingo.Descrición;
    break;


    default:
    deus.textContent = 'Error'
    descricion.textContent= 'Error'

        break;

}}
