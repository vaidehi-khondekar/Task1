// ===== JavaScript Interactivity =====
function showMessage() {
  alert("Hello, welcome to my page!");
}

function changeBackground() {
  const colors = ["#f28b82", "#fbbc04", "#34a853", "#4285f4", "#9c27b0", "#ff5722"];
  const randomColor = colors[Math.floor(Math.random() * colors.length)];
  document.body.style.background = randomColor;
}