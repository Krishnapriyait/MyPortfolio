document.addEventListener("DOMContentLoaded", () => {
    
    // Smooth Scroll to About Section
    document.querySelector("a[href='#about']").addEventListener("click", function (event) {
        event.preventDefault();
        document.getElementById("about").scrollIntoView({ behavior: "smooth" });
    });

    // Typing Animation for Hero Section
    const roles = ["Software Engineer", "Web Developer", "AI Enthusiast", "Tech Innovator"];
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