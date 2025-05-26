document.addEventListener("DOMContentLoaded", function () {
    const educationCards = document.querySelectorAll(".education-card");
    const floatingButtons = document.querySelectorAll(".link-btn");

    function revealCards() {
        const triggerHeight = window.innerHeight * 0.75;
        
        educationCards.forEach((card, index) => {
            const cardTop = card.getBoundingClientRect().top;
            if (cardTop < triggerHeight) {
                setTimeout(() => {
                    card.classList.add("visible");
                }, index * 200);
            }
        });
    }

    function animateButtons() {
        floatingButtons.forEach((btn, index) => {
            setTimeout(() => {
                btn.classList.add("floating");
            }, index * 300);
        });
    }

    window.addEventListener("scroll", revealCards);
    revealCards();
    animateButtons();

    // Background Animation
    let hue = 0;
    function changeBackground() {
        hue += 1;
        document.body.style.background = linear-gradient(${hue}deg, #ff00ff, #00ffff, #ff9900);
        requestAnimationFrame(changeBackground);
    }
    changeBackground();
});