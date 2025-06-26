document.addEventListener("DOMContentLoaded", () => {
  // Smooth Scroll to About Section
  const hamburger = document.getElementById("hamburger");
  const navMenu = document.getElementById("navMenu");
  const aboutLink = document.querySelector("a[href='#about']");
  if (aboutLink) {
    aboutLink.addEventListener("click", function (event) {
      event.preventDefault();
      document.getElementById("about").scrollIntoView({ behavior: "smooth" });
    });
  }

  // Typing Animation
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
  hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
  });

  // Auto-close menu when link is clicked
  document.querySelectorAll("#navMenu a").forEach(link => {
    link.addEventListener("click", () => {
      navMenu.classList.remove("active");
      hamburger.classList.remove("active");
    });
  });
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

  type(); // start typing effect
});
