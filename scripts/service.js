const services = document.querySelectorAll(".service");
const serviceCount = document.getElementById("service-count");
const scrollUpBtn = document.querySelector(".scroll-up");
const scrollDownBtn = document.querySelector(".scroll-down");

let currentIndex = 0;

function updateService(newIndex) {
  if (newIndex < 0 || newIndex >= services.length) return;

  // Remove active from current
  services[currentIndex].classList.remove("active");

  // Update index
  currentIndex = newIndex;

  // Add active to new one
  services[currentIndex].classList.add("active");

  // Animate count
  serviceCount.classList.add("animate");
  setTimeout(() => {
    serviceCount.textContent = String(currentIndex + 1).padStart(2, "0");
  }, 200);
  setTimeout(() => {
    serviceCount.classList.remove("animate");
  }, 600);
}

// Button Click Events
scrollDownBtn.addEventListener("click", () => {
  updateService(currentIndex + 1);
});

scrollUpBtn.addEventListener("click", () => {
  updateService(currentIndex - 1);
});

// Optional: scroll wheel control
