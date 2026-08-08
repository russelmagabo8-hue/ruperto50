document.addEventListener("DOMContentLoaded", () => {
    // =========================
// INTRO ENVELOPE
// =========================

const introScreen = document.getElementById("introScreen");
const website = document.getElementById("website");
const envelope = document.querySelector(".envelope-wrapper");

if (website) {
    website.style.display = "none";
}

if (envelope) {
    envelope.addEventListener("click", () => {

        envelope.style.pointerEvents = "none";

        const flap = document.querySelector(".flap");
        const letter = document.querySelector(".letter");

        if (flap) {
            flap.style.transform = "rotateX(180deg)";
        }

        if (letter) {
            letter.style.transform = "translateY(-50px)";
        }

        setTimeout(() => {

            introScreen.style.opacity = "0";
            introScreen.style.transition = "opacity .8s ease";

            setTimeout(() => {

                introScreen.style.display = "none";
                website.style.display = "block";

                // Start music
                playMusic();

            }, 800);

        }, 700);

    });
}

    // =========================
    // BACKGROUND SLIDESHOW
    // =========================

    const hero = document.querySelector(".hero");

    const images = [
        "assets/photos/tatay1.jpeg",
        "assets/photos/tatay2.jpeg",
        "assets/photos/tatay3.jpeg",
        "assets/photos/tatay4.jpeg",
        "assets/photos/tatay5.jpeg"
    ];

    let currentImage = 0;

    function changeBackground() {

        hero.style.opacity = "0";

        setTimeout(() => {

            document.documentElement.style.setProperty(
    "--hero-image",
    `url("${images[currentImage]}")`
);

           

            hero.style.opacity = "1";

            currentImage++;

            if(currentImage >= images.length){
                currentImage = 0;
            }

        },700);

    }

    changeBackground();

    setInterval(changeBackground,7000);

    // =========================
    // ENTER BUTTON
    // =========================

    const enterBtn = document.querySelector(".enter");

    if(enterBtn){

        enterBtn.addEventListener("click",(e)=>{

            e.preventDefault();

            const invite =
                document.querySelector("#invitation");

            if(invite){

                invite.scrollIntoView({

                    behavior:"smooth"

                });

            }

            playMusic();

        });

    }

    // =========================
    // BACKGROUND MUSIC
    // =========================

    const bgMusic =
        document.getElementById("bgMusic");

    let musicStarted = false;

    function playMusic(){

        if(!bgMusic) return;

        if(musicStarted) return;

        bgMusic.volume = .35;

        bgMusic.play().then(()=>{

            musicStarted = true;

        }).catch(()=>{});

    }

   // document.addEventListener("click",playMusic,{once:true});

// document.addEventListener("touchstart",playMusic,{once:true});

    // =========================
    // FLOATING PARTICLES
    // =========================

    for(let i=0;i<30;i++){

        const dot =
            document.createElement("span");

        dot.className="particle";

        dot.style.left=Math.random()*100+"%";

        dot.style.top=Math.random()*100+"%";

        dot.style.animationDelay=
            Math.random()*6+"s";

        dot.style.animationDuration=
            (5+Math.random()*6)+"s";

        hero.appendChild(dot);

    }
    // =========================
    // LIVE COUNTDOWN
    // =========================

    const targetDate = new Date("August 15, 2026 14:00:00").getTime();

    const daysEl = document.getElementById("days");
    const hoursEl = document.getElementById("hours");
    const minutesEl = document.getElementById("minutes");
    const secondsEl = document.getElementById("seconds");
    const messageEl = document.getElementById("countdownMessage");

    function updateCountdown(){

        const now = new Date().getTime();

        const distance = targetDate - now;

        if(distance <= 0){

            if(daysEl) daysEl.textContent = "00";
            if(hoursEl) hoursEl.textContent = "00";
            if(minutesEl) minutesEl.textContent = "00";
            if(secondsEl) secondsEl.textContent = "00";

            if(messageEl){

                messageEl.innerHTML =
                "🎉 Happy 50th Birthday! 🎉";

            }

            return;

        }

        const days = Math.floor(distance / (1000*60*60*24));

        const hours = Math.floor(
            (distance % (1000*60*60*24))
            /(1000*60*60)
        );

        const minutes = Math.floor(
            (distance % (1000*60*60))
            /(1000*60)
        );

        const seconds = Math.floor(
            (distance % (1000*60))
            /1000
        );

        if(daysEl){
            daysEl.textContent =
                String(days).padStart(2,"0");
        }

        if(hoursEl){
            hoursEl.textContent =
                String(hours).padStart(2,"0");
        }

        if(minutesEl){
            minutesEl.textContent =
                String(minutes).padStart(2,"0");
        }

        if(secondsEl){
            secondsEl.textContent =
                String(seconds).padStart(2,"0");
        }

    }

    updateCountdown();

    setInterval(updateCountdown,1000);

    // =========================
    // HERO CARD ANIMATION
    // =========================

    const card = document.querySelector(".card");

    if(card){

        card.animate([

            {
                transform:"translateY(20px)",
                opacity:0
            },

            {
                transform:"translateY(0px)",
                opacity:1
            }

        ],{

            duration:1200,

            easing:"ease-out",

            fill:"forwards"

        });

    }
        // =========================
    // SMOOTH SECTION FADE-IN
    // =========================

    const observer = new IntersectionObserver((entries) => {

        entries.forEach(entry => {

            if(entry.isIntersecting){

                entry.target.classList.add("show");

            }

        });

    },{
        threshold:0.15
    });

    document.querySelectorAll("section").forEach(section => {

        observer.observe(section);

    });

    // =========================
    // PARALLAX EFFECT
    // =========================

    window.addEventListener("scroll",()=>{

        const offset = window.pageYOffset;

        if(hero){

            hero.style.backgroundPosition =
                `center ${offset * 0.25}px`;

        }

    });

    // =========================
    // PRELOAD IMAGES
    // =========================

    images.forEach(src=>{

        const img = new Image();

        img.src = src;

    });

});
