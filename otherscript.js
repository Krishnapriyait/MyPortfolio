document.addEventListener("DOMContentLoaded", function () {
  const educationCards = document.querySelectorAll(".education-card");
  const floatingButtons = document.querySelectorAll(".link-btn");
  const hamburger = document.getElementById("hamburger");
  const navMenu = document.getElementById("navMenu");

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

  hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
  });

  document.querySelectorAll("#navMenu a").forEach(link => {
    link.addEventListener("click", () => {
      navMenu.classList.remove("active");
      hamburger.classList.remove("active");
    });
  });

  window.addEventListener("scroll", revealCards);
  revealCards();
  animateButtons();
});
