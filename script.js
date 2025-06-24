// Typing animation
document.addEventListener("DOMContentLoaded", () => {
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
  const typingText = document.getElementById("typing-text");

  function type() {
    if (charIndex < roles[roleIndex].length) {
      typingText.textContent += roles[roleIndex].charAt(charIndex);
      charIndex++;
      setTimeout(type, typingSpeed);
    } else {
      setTimeout(erase, delayBetweenWords);
    }
  }

  function erase() {
    if (charIndex > 0) {
      typingText.textContent = roles[roleIndex].substring(0, charIndex - 1);
      charIndex--;
      setTimeout(erase, deletingSpeed);
    } else {
      roleIndex = (roleIndex + 1) % roles.length;
      setTimeout(type, 500);
    }
  }

  setTimeout(type, 1000);
});

// Smooth scroll to About
document.addEventListener("DOMContentLoaded", () => {
  const aboutLink = document.querySelector("a[href='#about']");
  if (aboutLink) {
    aboutLink.addEventListener("click", function (event) {
      event.preventDefault();
      document.getElementById("about").scrollIntoView({ behavior: "smooth" });
    });
  }
});

// Hamburger toggle with animation
document.addEventListener("DOMContentLoaded", () => {
  const toggleBtn = document.getElementById("menu-toggle");
  const nav = document.getElementById("mobile-nav");

  if (toggleBtn && nav) {
    toggleBtn.addEventListener("click", () => {
      nav.classList.toggle("show");
      toggleBtn.classList.toggle("active");
    });
  }
});
