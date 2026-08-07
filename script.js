document.addEventListener("DOMContentLoaded", () => {

    // Fade in page
    document.body.style.opacity = "0";

    setTimeout(() => {
        document.body.style.transition = "opacity .8s";
        document.body.style.opacity = "1";
    }, 100);

    // ENTER button animation
    const enterBtn = document.querySelector(".enter");

    if (enterBtn) {

        enterBtn.addEventListener("click", function (e) {

            e.preventDefault();

            this.innerHTML = "WELCOME...";

            this.style.transform = "scale(.95)";

            this.style.pointerEvents = "none";

            // Play background music (Update 3)
            const music = document.getElementById("bgMusic");

            if (music) {

                music.volume = 0.35;

                music.play().catch(() => {});

            }

            // Smooth scroll
            setTimeout(() => {

                const invite = document.querySelector("#invitation");

                if (invite) {

                    invite.scrollIntoView({
                        behavior: "smooth"
                    });

                }

            }, 700);

        });

    }

    // Floating particles
    const hero = document.querySelector(".hero");

    if (hero) {

        for (let i = 0; i < 25; i++) {

            const dot = document.createElement("span");

            dot.className = "particle";

            dot.style.left = Math.random() * 100 + "%";

            dot.style.top = Math.random() * 100 + "%";

            dot.style.animationDelay = Math.random() * 6 + "s";

            dot.style.animationDuration = (5 + Math.random() * 6) + "s";

            hero.appendChild(dot);

        }

    }

});
