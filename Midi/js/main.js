function tocaSom( idAudio ) {

  document.querySelector(idAudio).play();
 
}

const listaTeclas = document.querySelectorAll(`.tecla`)

for (let i = 0; i < listaTeclas.length; i++) {
  listaTeclas[i].addEventListener(`click`, tocaSom)
}
