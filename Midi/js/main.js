function tocaSom(elementoAudio) {
  const elemento = document.querySelector(elementoAudio);

  if ((elemento != null) & (elemento.localName === "audio")) {
    elemento.play();
  } else {
    alert("Elemento não é um audio");
  }
}
const listaDeTeclas = document.querySelectorAll(".tecla");

for (let contador = 0; contador < listaDeTeclas.length; contador++) {
  const tecla = listaDeTeclas[contador];
  const intrumento = tecla.classList[1];

  const idAudio = `#som_${intrumento}`;
  tecla.onclick = function () {
    tocaSom(idAudio);
  };

  tecla.onkeydown = function (e) {
    console.log(e.code);
    if (e.keyCode === 13 || e.keyCode === 32) {
      tecla.classList.add("ativa");
    }
  };
  tecla.onkeyup = function () {
    tecla.classList.remove("ativa");
  };
}
