document.addEventListener("DOMContentLoaded", () => {

    // =========================
    // BACKGROUND MUSIC
    // =========================

    const bgMusic = document.getElementById("bgMusic");

    let musicStarted = false;

    function playMusic(){

    if(!bgMusic) return;

    bgMusic.volume = 0.35;

    if(bgMusic.ended){
        bgMusic.currentTime = 0;
    }

    if(bgMusic.paused){

        bgMusic.play().then(() => {

            musicStarted = true;

        }).catch(() => {});

    }

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
// =========================
// INVITATION PAGE NAVIGATION
// =========================

const widgetCards =
    document.querySelectorAll(".widget-card");

const invitationPages =
    document.querySelectorAll(".invitation-page");

const backButtons =
    document.querySelectorAll(".page-back-btn");


// =========================
// OPEN WIDGET PAGE
// =========================

widgetCards.forEach(widget => {

    widget.addEventListener("click", function () {

        const targetId =
            this.getAttribute("data-target");

        const pageId =
            targetId + "Page";

        const targetPage =
            document.getElementById(pageId);

        if (!targetPage) {

            console.log("Page not found:", pageId);

            return;

        }


        // Hide every invitation page
        invitationPages.forEach(page => {

            page.style.display = "none";

        });


        // Hide HOME
        const websiteHome =
            document.querySelector(".hero");

        const widgets =
            document.querySelector(".invitation-widgets");

        const invitation =
            document.getElementById("invitation");


        if (websiteHome) {

            websiteHome.style.display = "none";

        }

        if (widgets) {

            widgets.style.display = "none";

        }

        if (invitation) {

            invitation.style.display = "none";

        }


        // Show selected page
        targetPage.style.display = "block";


        // Scroll to top
        window.scrollTo(0, 0);

    });

});


// =========================
// BACK TO INVITATION
// =========================

backButtons.forEach(button => {

    button.addEventListener("click", function () {


        // Hide all separate pages
        invitationPages.forEach(page => {

            page.style.display = "none";

        });


        // Show HOME
        const websiteHome =
            document.querySelector(".hero");

        const widgets =
            document.querySelector(".invitation-widgets");

        const invitation =
            document.getElementById("invitation");


        if (websiteHome) {

            websiteHome.style.display = "block";

        }

        if (widgets) {

            widgets.style.display = "grid";

        }

        if (invitation) {

            invitation.style.display = "block";

        }


        // Scroll to top
        window.scrollTo(0, 0);

    });

});
// =========================
// RSVP FORM + EMAILJS
// =========================

const rsvpForm = document.getElementById("rsvpForm");
const rsvpStatus = document.getElementById("rsvpStatus");
const rsvpSubmit = document.getElementById("rsvpSubmit");

if (rsvpForm) {

    rsvpForm.addEventListener("submit", function(event) {

        event.preventDefault();
        event.stopPropagation();

      const guestNameEl =
    document.getElementById("guestName");

const attendance =
    rsvpForm.querySelector(
        'input[name="attendance"]:checked'
    );

const messageEl =
    document.getElementById("message");

if (!guestNameEl || !messageEl) {
    console.error("RSVP name or message field not found.");
    return;
}

const guestName =
    guestNameEl.value.trim();

const message =
    messageEl.value.trim();


        if (!guestName || !attendance) {

            if (rsvpStatus) {
                rsvpStatus.textContent =
                    "Please enter your name and select your attendance.";
            }

            return;
        }


        if (rsvpSubmit) {
            rsvpSubmit.disabled = true;
            rsvpSubmit.textContent = "Sending... 💌";
        }

        if (rsvpStatus) {
            rsvpStatus.textContent = "Sending your RSVP...";
        }


  emailjs.send(
    "service_tjznl1u",
    "template_kky1xou",
    {
        guest_name: guestName,
        attendance: attendance.value,
        message: message
    },
    "udwniAMHg94TYKIsn"
)
        .then(function(response) {

            console.log(
                "RSVP SENT:",
                response.status,
                response.text
            );

            if (rsvpStatus) {
                rsvpStatus.textContent =
                    "Thank you! Your RSVP has been sent successfully. 💌";
            }

            if (rsvpSubmit) {
                rsvpSubmit.textContent = "✓ RSVP Sent";
            }


            // Return to homepage
            setTimeout(function() {

    const backButton = document.querySelector(".page-back-btn");

    if (backButton) {
        backButton.click();
    }

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

}, 1500);
        })

        .catch(function(error) {

            console.error(
                "RSVP EMAIL ERROR:",
                error
            );

            if (rsvpStatus) {
                rsvpStatus.textContent =
                    "Sorry, something went wrong. Please try again.";
            }

            if (rsvpSubmit) {
                rsvpSubmit.disabled = false;
                rsvpSubmit.textContent = "💌 Submit RSVP";
            }

        });

    });

}

});
