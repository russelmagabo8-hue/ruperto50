document.addEventListener("DOMContentLoaded", () => {

    /* ==========================
       ELEMENTS
    ========================== */

    const hero = document.querySelector(".hero");
    const enterBtn = document.querySelector(".enter");
    const music = document.getElementById("bgMusic");
    const invitation = document.getElementById("invitation");

    /* ==========================
       PAGE FADE
    ========================== */

    document.body.style.opacity = "0";

    setTimeout(() => {

        document.body.style.transition = "opacity .8s";

        document.body.style.opacity = "1";

    },100);

    /* ==========================
       GOLD PARTICLES
    ========================== */

    if(hero){

        for(let i=0;i<25;i++){

            const dot=document.createElement("span");

            dot.className="particle";

            dot.style.left=Math.random()*100+"%";

            dot.style.top=Math.random()*100+"%";

            dot.style.animationDelay=Math.random()*6+"s";

            dot.style.animationDuration=(5+Math.random()*6)+"s";

            hero.appendChild(dot);

        }

    }

    /* ==========================
       BACKGROUND SLIDESHOW
    ========================== */

    const photos=[

        "assets/photos/tatay1.jpeg",

        "assets/photos/tatay2.jpeg",

        "assets/photos/tatay3.jpeg",

        "assets/photos/tatay4.jpeg",

        "assets/photos/tatay5.jpeg"

    ];

    let currentPhoto=0;

    function nextPhoto(){

        currentPhoto++;

        if(currentPhoto>=photos.length){

            currentPhoto=0;

        }

        document.documentElement.style.setProperty(

            "--hero-image",

            `url("${photos[currentPhoto]}")`

        );

    }

    setInterval(nextPhoto,7000);

    /* ==========================
       ENTER BUTTON
    ========================== */

    if(enterBtn){

        enterBtn.addEventListener("click",(e)=>{

            e.preventDefault();

            enterBtn.innerHTML="WELCOME...";

            enterBtn.style.pointerEvents="none";

            enterBtn.style.transform="scale(.96)";

            if(music){

    music.volume=0;

    music.play().catch(()=>{});

    let volume=0;

    const fade=setInterval(()=>{

        volume+=0.03;

        if(volume>=0.35){

            volume=0.35;

            clearInterval(fade);

        }

        music.volume=volume;

    },120);

}

            setTimeout(()=>{

                if(invitation){

                    invitation.scrollIntoView({

                        behavior:"smooth"

                    });

                }

            },700);

        });

    }

});
