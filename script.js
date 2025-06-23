document.addEventListener("DOMContentLoaded", () => {
    
    // Smooth Scroll to About Section
    document.querySelector("a[href='#about']").addEventListener("click", function (event) {
        event.preventDefault();
        document.getElementById("about").scrollIntoView({ behavior: "smooth" });
    });

    // Typing Animation for Hero Section
    const roles = ["Web Developer", "Software Engineer", "Frontend Developer", "Tech Enthusiast", "Backend Developer", "Problem Solver"];
    let roleIndex = 0;
    let charIndex = 0;
    const typingSpeed = 100;
    const deletingSpeed = 50;
    const delayBetweenWords = 1500;
    
    function typeEffect() {
        const dynamicText = document.getElementById("dynamic-role");
        if (charIndex < roles[roleIndex].length) {
            dynamicText.textContent += roles[roleIndex].charAt(charIndex);
            charIndex++;
            setTimeout(typeEffect, typingSpeed);
        } else {
            setTimeout(deleteEffect, delayBetweenWords);
        }
    }
    
    function deleteEffect() {
        const dynamicText = document.getElementById("dynamic-role");
        if (charIndex > 0) {
            dynamicText.textContent = roles[roleIndex].substring(0, charIndex - 1);
            charIndex--;
            setTimeout(deleteEffect, deletingSpeed);
        } else {
            roleIndex = (roleIndex + 1) % roles.length;
            setTimeout(typeEffect, typingSpeed);
        }
    }

    // Start Typing Animation
    setTimeout(typeEffect, 1000);
});
const roles = ["Web Developer", "Software Engineer","Frontend Developer",  "Tech Enthusiast", "Backend Developer", "Problem Solver"];
let roleIndex = 0;
let charIndex = 0;
const typingText = document.getElementById("typing-text");

function type() {
    if (charIndex < roles[roleIndex].length) {
        typingText.innerHTML += roles[roleIndex].charAt(charIndex);
        charIndex++;
        setTimeout(type, 100);
    } else {
        setTimeout(erase, 1500);
    }
}

function erase() {
    if (charIndex > 0) {
        typingText.innerHTML = roles[roleIndex].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(erase, 50);
    } else {
        roleIndex = (roleIndex + 1) % roles.length;
        setTimeout(type, 500);
    }
}

document.addEventListener("DOMContentLoaded", type);