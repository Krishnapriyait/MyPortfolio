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

  // Hamburger Mobile Menu Logic
  const hamburger = document.getElementById("hamburger");
  const nav = document.getElementById("nav-links");
  const navLinks = nav.querySelectorAll("a");

  hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    nav.classList.toggle("active");
  });

  navLinks.forEach(link => {
    link.addEventListener("click", () => {
      nav.classList.remove("active");
      hamburger.classList.remove("active");
    });
  });

});
