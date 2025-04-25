function init() {
  dojo.require("dojo.parser"), cargaImagen();
}
function cargaImagen() {
  index == elementos && (index = 0),
    dojo.xhrPost({
      url: estilos[index] + ".action",
      content: { parametro: parametros[index] },
      style: "border: 0; width: 100%; height: 100%",
      handleAs: "text",
      timeout: 8e3,
      load: function (e, o) {
        return (dojo.byId("corpo").innerHTML = e), e;
      },
      error: function (e, o) {
        return console.error("HTTP status code: ", o.xhr.status), e;
      },
    }),
    setTimeout(function () {
      cargaImagen();
    }, tempos[index]),
    index++;
}
