function escrever(elemento){
    const textoArray = elemento.innerHTML.split(``);
    elemento.innerHTML = ` `;

    textoArray.forEach((letra, i) => {   
      
    setTimeout(() => {
        elemento.innerHTML += letra;
    }, 150 * i)

  });
  
}
document.addEventListener(`DOMContentLoaded`, () => {
  
  new TypeIt(".machine",{
    speed:200,
    loop:true,
    startDelay:4000,
  })
  .type(`<em>Programador.</em>`,{delay:1000})
  .delete(12)
  
  .type(`<em>Desenvolvedor</em>`,{delay:500})
  .move(1)
  .delete(1)
  
  .type(` Front-End.`,{delay:900})
  .move(-5)
  .delete(5)
  
  .type(` Back`,{delay:1000})
  .pause(1000)
  .delete(8)
  .move(5)
  .delete(16)

  .type(` Full-Stack.`,{delay:1000})
  .delete(11)
  .move(null, {delay: 200, to: 'end', instant: true})
  .go();
})


const titulo = document.querySelector('.titulo-principal');
escrever(titulo);

const target = document.querySelectorAll('[data-anime]');
const animationClass = 'animate';

function animeScroll(){
  const windowTop = window.pageYOffset + ((window.innerHeight * 3.5) / 4);
  
  target.forEach(function(element){
    if((windowTop) > element.offsetTop){
      element.classList.add(animationClass);
    }else{
      element.classList.remove(animationClass);
    }
  });
};
animeScroll();
if(target.length){

window.addEventListener('scroll', function ()  { 
  animeScroll();
  console.log(window.pageYOffset);
});

}



  
  


