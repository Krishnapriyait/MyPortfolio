document.addEventListener("DOMContentLoaded", function () {
  const hamburger = document.getElementById("hamburger");
  const navMenu = document.getElementById("navMenu");
  const modal = document.getElementById("certificateModal");
  const modalImg = document.getElementById("modalImage");
  const openBtn = document.getElementById("openModalBtn");
  const closeBtn = document.querySelector(".modal .close");
    openBtn.addEventListener("click", () => {
    modal.style.display = "block";
    modalImg.src = openBtn.src;
  });

  closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
  });

  window.addEventListener("click", (e) => {
    if (e.target == modal) {
      modal.style.display = "none";
    }
  });
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

  const blurBoxes = document.querySelectorAll(".blur-box");
  const detailSections = document.querySelectorAll(".experience-detail");

  blurBoxes.forEach(box => {
    box.addEventListener("click", () => {
      const targetId = box.dataset.target;

      detailSections.forEach(section => section.classList.remove("active"));

      const selectedSection = document.getElementById(targetId);
      if (selectedSection) {
        selectedSection.classList.add("active");
        selectedSection.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });
});