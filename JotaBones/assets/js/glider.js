window.addEventListener('load', function(){
    new Glider(document.querySelector('.glider'), {
        slidesToShow: 1,
        slidesToScroll: 1,
        draggable: true,
        dots: '.dots',
        
        arrows: {
            prev: '.glider-prev',
            next: '.glider-next'
        },
        scrollLock: true,
    })
    
  })

 setInterval(function(){
    document.querySelector('.glider-next').click();
  }
    , 2000);


  