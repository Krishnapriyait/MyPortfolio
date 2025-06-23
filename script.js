document.addEventListener("DOMContentLoaded", () => {
    // Smooth scroll to About section
    const aboutLink = document.querySelector("a[href='#about']");
    if (aboutLink) {
        aboutLink.addEventListener("click", (event) => {
            event.preventDefault();
            document.getElementById("about").scrollIntoView({ behavior: "smooth" });
        });
    }

    // Typing animation
    const roles = [
        "Web Developer",
        "Software Engineer",
        "Frontend Developer",
        "Tech Enthusiast",
        "Backend Developer",
        "Problem Solver"
    ];
    let roleIndex = 0;
    let charIndex = 0;
    const typingSpeed = 100;
    const deletingSpeed = 50;
    const delayBetweenWords = 1500;
    const dynamicText = document.getElementById("dynamic-role");

    function typeEffect() {
        if (charIndex < roles[roleIndex].length) {
            dynamicText.textContent += roles[roleIndex].charAt(charIndex);
            charIndex++;
            setTimeout(typeEffect, typingSpeed);
        } else {
            setTimeout(deleteEffect, delayBetweenWords);
        }
    }

    function deleteEffect() {
        if (charIndex > 0) {
            dynamicText.textContent = roles[roleIndex].substring(0, charIndex - 1);
            charIndex--;
            setTimeout(deleteEffect, deletingSpeed);
        } else {
            roleIndex = (roleIndex + 1) % roles.length;
            setTimeout(typeEffect, typingSpeed);
        }
    }

    if (dynamicText) {
        setTimeout(typeEffect, 1000);
    }

    // Hamburger menu toggle
    const toggleBtn = document.getElementById("menu-toggle");
    const nav = document.querySelector("nav");

    if (toggleBtn && nav) {
        toggleBtn.addEventListener("click", () => {
            nav.classList.toggle("show");
        });
    }
});
