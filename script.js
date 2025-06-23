
document.addEventListener("DOMContentLoaded", () => {
    const roles = ["Web Developer", "Software Engineer", "Frontend Developer", "Tech Enthusiast", "Backend Developer", "Problem Solver"];
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

    type();
});
