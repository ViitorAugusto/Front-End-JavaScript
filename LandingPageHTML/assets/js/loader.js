loader = document.getElementById(`butt`)

    loader.onmouseenter = function efeito(){
        let e = document.querySelector(`.number`);
        e.style.animation = "fadeIn" ,
            setTimeout(function(){
                e.style.animation = "";
            }, 1200)
    }

    // loader = document.getElementById(`butt`)

    //         loader.onmouseenter= function efeito(){
    //             let e = document.querySelector(`.dot`);
    //             e.style.animation = "animateDot" ,
    //                 setTimeout(function(){
    //                     e.style.animation = "";
    //                 },500)
    //         }