document.addEventListener("DOMContentLoaded", () => {
  const statusSelect = document.getElementById("status");
  const collegeField = document.getElementById("collegeField");
  const companyField = document.getElementById("companyField");

  statusSelect.addEventListener("change", () => {
    if (statusSelect.value === "student") {
      collegeField.style.display = "block";
      companyField.style.display = "none";
    } else if (statusSelect.value === "employee") {
      companyField.style.display = "block";
      collegeField.style.display = "none";
    } else {
      companyField.style.display = "none";
      collegeField.style.display = "none";
    }
  });
});
document.getElementById("contactForm").addEventListener("submit", async function (e) {
  e.preventDefault();

  const formData = new FormData(this);
  const data = Object.fromEntries(formData.entries());

  const response = await fetch("https://contact-backend-d59o.onrender.com/submit", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  });

  if (response.ok) {
    alert("Message sent successfully!");
    this.reset();
    document.getElementById("collegeField").style.display = "none";
    document.getElementById("companyField").style.display = "none";
  } else {
    alert("Failed to send message.");
  }
});
