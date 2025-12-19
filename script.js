document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.querySelector(".nav-toggle");
  const navLinks = document.querySelector(".nav-links");
  const year = document.getElementById("year");

  year.textContent = new Date().getFullYear();

  toggle.addEventListener("click", () => {
    navLinks.classList.toggle("show");
  });

  document.querySelectorAll(".room-card button").forEach(btn => {
    btn.addEventListener("click", () => {
      alert("Booking coming soon! Please contact us.");
    });
  });
});
