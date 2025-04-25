document.addEventListener('DOMContentLoaded', function () {
    // Obter referencias aos elementos do DOM
    var tarxeta01 = document.getElementById('tarxeta01');
    var tarxeta02 = document.getElementById('tarxeta02');
    var tarxeta03 = document.getElementById('tarxeta03');
    var tarxeta04 = document.getElementById('tarxeta04');
    var tarxeta_inicio = document.getElementById('tarxeta_inicio');

    var boton__tarxeta01 = document.getElementById('boton__tarxeta01');
    var boton__tarxeta02 = document.getElementById('boton__tarxeta02');
    var boton__tarxeta03 = document.getElementById('boton__tarxeta03');
    var boton__tarxeta04 = document.getElementById('boton__tarxeta04');
    // Funcións para amosar tarxetas
    function amosartarseta_inicio() {
        tarxeta01.style.display = 'none';
        tarxeta02.style.display = 'none';
        tarxeta03.style.display = 'none';
        tarxeta04.style.display = 'none';
        tarxeta_inicio.style.display = 'block';
    }
    function amosartarxeta01() {
      tarxeta01.style.display = 'block';
      tarxeta02.style.display = 'none';
      tarxeta03.style.display = 'none';
      tarxeta04.style.display = 'none';
      tarxeta_inicio.style.display = 'none';
    }
  
    function amosartarxeta02() {
      tarxeta01.style.display = 'none';
      tarxeta02.style.display = 'block';
      tarxeta03.style.display = 'none';
      tarxeta04.style.display = 'none';
      tarxeta_inicio.style.display = 'none';
    }
  
    function amosartarxeta03() {
      tarxeta01.style.display = 'none';
      tarxeta02.style.display = 'none';
      tarxeta03.style.display = 'block';
      tarxeta04.style.display = 'none';
        tarxeta_inicio.style.display = 'none';
    }
    function amosartarxeta04() {
        tarxeta01.style.display = 'none';
        tarxeta02.style.display = 'none';
        tarxeta03.style.display = 'none';
        tarxeta04.style.display = 'block';
        tarxeta_inicio.style.display = 'none';
        }
    // Asignar funcións aos eventos de clic
    boton__tarxeta01.addEventListener('click', amosartarxeta01);
    boton__tarxeta02.addEventListener('click', amosartarxeta02);
    boton__tarxeta03.addEventListener('click', amosartarxeta03);
    boton__tarxeta04.addEventListener('click', amosartarxeta04);
  });
  
  if(display = 'none'){
    tarxeta01.style.display = 'none';
    tarxeta02.style.display = 'none';
    tarxeta03.style.display = 'none';
    tarxeta04.style.display = 'none';
}