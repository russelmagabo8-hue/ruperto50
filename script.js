document.addEventListener("DOMContentLoaded", () => {

    // =========================
    // BACKGROUND MUSIC
    // =========================

    const bgMusic = document.getElementById("bgMusic");

    let musicStarted = false;

    function playMusic(){

        if(!bgMusic) return;

        if(musicStarted) return;

        bgMusic.volume = 0.35;

        bgMusic.play().then(() => {

            musicStarted = true;

        }).catch(() => {});

    }


    // =========================
    // FLOATING PARTICLES
    // =========================

    const hero = document.querySelector(".hero");

    if(hero){

        for(let i = 0; i < 30; i++){

            const dot = document.createElement("span");

            dot.className = "particle";

            dot.style.left =
                Math.random() * 100 + "%";

            dot.style.top =
                Math.random() * 100 + "%";

            dot.style.animationDelay =
                Math.random() * 6 + "s";

            dot.style.animationDuration =
                (5 + Math.random() * 6) + "s";

            hero.appendChild(dot);

        }

    }


    // =========================
    // LIVE COUNTDOWN
    // =========================

    const targetDate =
        new Date("August 15, 2026 14:00:00").getTime();

    const daysEl =
        document.getElementById("days");

    const hoursEl =
        document.getElementById("hours");

    const minutesEl =
        document.getElementById("minutes");

    const secondsEl =
        document.getElementById("seconds");

    const messageEl =
        document.getElementById("countdownMessage");


    function updateCountdown(){

        const now = new Date().getTime();

        const distance = targetDate - now;


        if(distance <= 0){

            if(daysEl)
                daysEl.textContent = "00";

            if(hoursEl)
                hoursEl.textContent = "00";

            if(minutesEl)
                minutesEl.textContent = "00";

            if(secondsEl)
                secondsEl.textContent = "00";

            if(messageEl){

                messageEl.innerHTML =
                    "🎉 Happy 50th Birthday! 🎉";

            }

            return;

        }


        const days =
            Math.floor(
                distance /
                (1000 * 60 * 60 * 24)
            );


        const hours =
            Math.floor(
                (distance %
                (1000 * 60 * 60 * 24)) /
                (1000 * 60 * 60)
            );


        const minutes =
            Math.floor(
                (distance %
                (1000 * 60 * 60)) /
                (1000 * 60)
            );


        const seconds =
            Math.floor(
                (distance %
                (1000 * 60)) /
                1000
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
    // SMOOTH SECTION FADE-IN
    // =========================

    const observer =
        new IntersectionObserver((entries) => {

            entries.forEach(entry => {

                if(entry.isIntersecting){

                    entry.target.classList.add("show");

                }

            });

        },{
            threshold:0.15
        });


    document
        .querySelectorAll("section")
        .forEach(section => {

            observer.observe(section);

        });
// =========================
// PHOTO GALLERY
// =========================

const gallerySlides =
    document.querySelectorAll(".gallery-slide");

const galleryPrev =
    document.getElementById("galleryPrev");

const galleryNext =
    document.getElementById("galleryNext");

let galleryIndex = 0;


function showGallerySlide(index){

    if(!gallerySlides.length) return;

    gallerySlides.forEach(slide => {

        slide.classList.remove("active");

    });

    galleryIndex = index;

    if(galleryIndex < 0){

        galleryIndex =
            gallerySlides.length - 1;

    }

    if(galleryIndex >= gallerySlides.length){

        galleryIndex = 0;

    }

    gallerySlides[galleryIndex]
        .classList.add("active");

}


// PREVIOUS PHOTO

if(galleryPrev){

    galleryPrev.addEventListener("click", () => {

        showGallerySlide(galleryIndex - 1);

    });

}


// NEXT PHOTO

if(galleryNext){

    galleryNext.addEventListener("click", () => {

        showGallerySlide(galleryIndex + 1);

    });

}


// FIRST PHOTO

showGallerySlide(0);

    // =========================
    // OPEN INVITATION
    // =========================

    const openInvitation =
        document.getElementById("openInvitation");

    const intro =
        document.getElementById("introScreen");

    const website =
        document.getElementById("website");


    if(website){

        website.style.display = "none";

    }


    if(openInvitation){

        openInvitation.addEventListener("click", () => {

            intro.style.opacity = "0";


            setTimeout(() => {

                intro.style.display = "none";

                website.style.display = "block";

                playMusic();


                window.scrollTo({

                    top:0,

                    behavior:"smooth"

                });

            },700);

        });

    }


});
