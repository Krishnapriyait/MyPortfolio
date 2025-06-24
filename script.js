// Typing Animation const roles = [ "Web Developer", "Software Engineer", "Frontend Developer", "Tech Enthusiast", "Backend Developer", "Problem Solver" ]; let roleIndex = 0; let charIndex = 0; const typingText = document.getElementById("typing-text");

function type() { if (charIndex < roles[roleIndex].length) { typingText.innerHTML += roles[roleIndex].charAt(charIndex); charIndex++; setTimeout(type, 100); } else { setTimeout(erase, 1500); } }

function erase() { if (charIndex > 0) { typingText.innerHTML = roles[roleIndex].substring(0, charIndex - 1); charIndex--; setTimeout(erase, 50); } else { roleIndex = (roleIndex + 1) % roles.length; setTimeout(type, 500); } }

document.addEventListener("DOMContentLoaded", () => { setTimeout(type, 1000);

// Smooth Scroll to About Section const aboutLink = document.querySelector("a[href='#about']"); if (aboutLink) { aboutLink.addEventListener("click", function (event) { event.preventDefault(); document.getElementById("about").scrollIntoView({ behavior: "smooth" }); }); }

// Hamburger Toggle const toggleBtn = document.getElementById("menu-toggle"); const nav = document.querySelector("nav");

if (toggleBtn && nav) { toggleBtn.addEventListener("click", () => { nav.classList.toggle("show"); }); }

// Animate fade-in sections const fadeInElements = document.querySelectorAll(".fade-in"); fadeInElements.forEach((el, index) => { el.style.animationDelay = ${index * 0.3}s; el.classList.add("fade-in"); }); });

