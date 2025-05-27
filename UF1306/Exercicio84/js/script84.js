const modelo = [
  {
    taicon__m: "Taycan",
    image__car: "./assets/cars/models/taycan-berlina.avif",
    aceleration: "4,8",
    powerone: "308",
    powertwo: "408",
    speed: "230",
    price: "Desde EUR 106.252,00 PVP Recomendado<sup>1</sup>", //innerHtml
    front: "./assets/cars/front/frente-taycan-berlina.avif",
    description__p:
      "Consumo eléctrico combinado - WLTP* (intervalo modelo): 19,4 – 16,7 kWh/100 km, Consumo eléctrico bajo - WLTP* (intervalo modelo): 16,6 – 14,4 kWh/100 km, Consumo eléctrico medio - WLTP* (intervalo modelo): 16,6 – 13,8 kWh/100 km, Consumo eléctrico alto - WLTP* (intervalo modelo): 17,6 – 14,2 kWh/100 km, Consumo eléctrico muy alto - WLTP* (intervalo modelo): 22,8 – 18,2 kWh/100 km, Autonomía eléctrica en ciudad - WLTP* (intervalo modelo): 593 – 824 km, Autonomía eléctrica combinado - WLTP* (intervalo modelo): 521 – 680 km, Emisiones CO2 combinado (Gasolina y BEV)/ combinado ponderado (PHEV) - WLTP* (intervalo modelo): 0 – 0 g/km",
  },

  {
    taicon__m: "Taycan Sport Turismo",
    image__car: "./assets/cars/models/taycan-sport.avif",
    aceleration: "4,8",
    powerone: "308",
    powertwo: "408",
    speed: "230",
    price: "Desde EUR 107.539,00 PVP Recomendado<sup>1</sup>",
    front: "./assets/cars/front/frente-taycan-sport.avif",
    description__p:
      "Consumo eléctrico combinado - WLTP* (intervalo modelo): 20,2 – 17,5 kWh/100 km, Consumo eléctrico bajo - WLTP* (intervalo modelo): 16,9 – 14,6 kWh/100 km, Consumo eléctrico medio - WLTP* (intervalo modelo): 17,0 – 14,1 kWh/100 km, Consumo eléctrico alto - WLTP* (intervalo modelo): 18,3 – 14,8 kWh/100 km, Consumo eléctrico muy alto - WLTP* (intervalo modelo): 24,2 – 19,5 kWh/100 km, Autonomía eléctrica en ciudad - WLTP* (intervalo modelo): 579 – 811 km, Autonomía eléctrica combinado - WLTP* (intervalo modelo): 496 – 652 km, Emisiones CO2 combinado (Gasolina y BEV)/ combinado ponderado (PHEV) - WLTP* (intervalo modelo): 0 – 0 g/km",
  },

  {
    taicon__m: "Taycan 4 Cross Turismo",
    image__car: "./assets/cars/models/taycan-cross.avif",
    aceleration: "4,7",
    powerone: "320",
    powertwo: "435",
    speed: "220",
    price: "Desde EUR 119.013,00 PVP Recomendado<sup>1</sup>",
    front: "./assets/cars/front/frente-taycan-cross.avif",
    description__p:
      "Consumo eléctrico combinado - WLTP* (intervalo modelo): 21,4 – 18,7 kWh/100 km, Consumo eléctrico bajo - WLTP* (intervalo modelo): 18,8 – 16,7 kWh/100 km, Consumo eléctrico medio - WLTP* (intervalo modelo): 18,4 – 16,1 kWh/100 km, Consumo eléctrico alto - WLTP* (intervalo modelo): 19,6 – 17,1 kWh/100 km, Consumo eléctrico muy alto - WLTP* (intervalo modelo): 25,8 – 22,5 kWh/100 km, Autonomía eléctrica en ciudad - WLTP* (intervalo modelo): 611 – 696 km, Autonomía eléctrica combinado - WLTP* (intervalo modelo): 532 – 614 km, Emisiones CO2 combinado (Gasolina y BEV)/ combinado ponderado (PHEV) - WLTP* (intervalo modelo): 0 – 0 g/km", 
  },
];

function cambiarCoche(i) {
  if (i) {
    document.getElementById("picCoche").src = modelo[i].image__car;
    document.getElementById("picCoche").alt = modelo[i].taicon__m;

    document.getElementById("taycanM").textContent = modelo[i].taicon__m;
    document.getElementById("price").innerHTML = modelo[i].price;
    document.getElementById("descriptionP").textContent =
      modelo[i].description__p;
    document.getElementById("aceleration").textContent = modelo[i].aceleration;
    document.getElementById("potenciaKw").textContent = modelo[i].powerone;
    document.getElementById("potenciaCv").textContent = modelo[i].powertwo;
    document.getElementById("speed").textContent = modelo[i].speed;
    document.getElementById("frontCar").src = modelo[i].front;
    document.getElementById("frontCar").alt = modelo[i].taicon__m;

    switch (i) {
      case 0:
        document.getElementById("berlina").classList.add("active");
        document.getElementById("sport").classList.remove("active");
        document.getElementById("cross").classList.remove("active");

        break;

      case 1:
        document.getElementById("berlina").classList.remove("active");
        document.getElementById("sport").classList.add("active");
        document.getElementById("cross").classList.remove("active");

        break;

      case 2:
        document.getElementById("berlina").classList.remove("active");
        document.getElementById("sport").classList.remove("active");
        document.getElementById("cross").classList.add("active");

        break;
      default:
        break;
    }
  } else {
    document.getElementById("picCoche").src = modelo[0].image__car;
    document.getElementById("picCoche").alt = modelo[0].taicon__m;

    document.getElementById("taycanM").textContent = modelo[0].taicon__m;
    document.getElementById("price").innerHTML = modelo[0].price;
    document.getElementById("descriptionP").textContent =
      modelo[0].description__p;
    document.getElementById("aceleration").textContent = modelo[0].aceleration;
    document.getElementById("potenciaKw").textContent = modelo[0].powerone;
    document.getElementById("potenciaCv").textContent = modelo[0].powertwo;
    document.getElementById("speed").textContent = modelo[0].speed;
    document.getElementById("frontCar").src = modelo[0].front;
    document.getElementById("frontCar").alt = modelo[0].taicon__m;
  }
}
