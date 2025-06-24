document.addEventListener("DOMContentLoaded", () => {
  setTimeout(type, 1000);

  // Smooth scroll to About section
  const aboutLink = document.querySelector("a[href='#about']");
  if (aboutLink) {
    aboutLink.addEventListener("click", function (event) {
      event.preventDefault();
      const aboutSection = document.getElementById("about");
      aboutSection.scrollIntoView({ behavior: "smooth" });

      // Trigger animation class
      aboutSection.classList.add("reveal");
    });
  }

  // Hamburger menu toggle
  const toggleBtn = document.getElementById("menu-toggle");
  const navMenu = document.getElementById("mobile-nav-links");
  if (toggleBtn && navMenu) {
    toggleBtn.addEventListener("click", () => {
      navMenu.classList.toggle("open");
    });
  }

  // Animate menu links
  const menuLinks = document.querySelectorAll("#mobile-nav-links a");
  menuLinks.forEach((link, index) => {
    link.style.animation = `fadeInLink 0.5s ease forwards ${index / 10 + 0.3}s`;
  });

  // Animate About Me section when scrolled into view (backup)
  const aboutSection = document.getElementById("about");
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        aboutSection.classList.add("reveal");
        observer.disconnect(); // only animate once
      }
    });
  }, {
    threshold: 0.3
  });

  observer.observe(aboutSection);
});
