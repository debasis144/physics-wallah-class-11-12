// script.js
// Create floating background elements
function createBgElements() {
  const bgContainer = document.querySelector(".bg-elements");
  const colors = ["#3498db", "#e74c3c", "#2ecc71", "#9b59b6"];

  for (let i = 0; i < 15; i++) {
    const element = document.createElement("div");
    element.className = "bg-element";

    // Random properties
    const size = Math.random() * 100 + 50;
    const posX = Math.random() * 100;
    const delay = Math.random() * 5;
    const duration = Math.random() * 20 + 10;

    element.style.width = `${size}px`;
    element.style.height = `${size}px`;
    element.style.left = `${posX}%`;
    element.style.animationDelay = `${delay}s`;
    element.style.animationDuration = `${duration}s`;
    element.style.background =
      colors[Math.floor(Math.random() * colors.length)];

    bgContainer.appendChild(element);
  }
}

// Set subject color variables based on current page
function setSubjectColor() {
  const path = window.location.pathname;
  let subjectColor = "#3498db";

  if (path.includes("physics")) subjectColor = "#e74c3c";
  if (path.includes("chemistry")) subjectColor = "#2ecc71";
  if (path.includes("biology")) subjectColor = "#9b59b6";

  document.documentElement.style.setProperty("--subject-color", subjectColor);

  // Convert color to RGB for gradient
  const hexToRgb = (hex) => {
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);
    return `${r}, ${g}, ${b}`;
  };

  document.documentElement.style.setProperty(
    "--subject-rgb",
    hexToRgb(subjectColor)
  );
}

// Initialize
document.addEventListener("DOMContentLoaded", function () {
  createBgElements();
  setSubjectColor();

  // Show the active page (for single-page navigation)
  if (document.querySelector(".page")) {
    document.querySelector(".page").classList.add("active");
  }
});
