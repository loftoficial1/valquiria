/* PARTICLES */
particlesJS("particles-js", {
  particles: {
    number: { value: 50 },
    color: { value: "#ff0000" },
    shape: { type: "circle" },
    opacity: { value: 0.5 },
    size: { value: 3 },
    move: { enable: true, speed: 2 }
  }
});

/* ===== CÂMERA FAKE ===== */
const menu = document.getElementById("menu");

function tilt(value) {
  menu.style.transform = `rotateY(${value}deg) rotateX(${value / 2}deg) scale(1.05)`;
}

function resetTilt() {
  menu.style.transform = "rotateY(0deg) rotateX(0deg) scale(1)";
}

/* ===== MODAIS ===== */
function openRecruit() {
  document.getElementById("recruitModal").style.display = "flex";
}

function closeRecruit() {
  document.getElementById("recruitModal").style.display = "none";
}

function openAbout() {
  document.getElementById("aboutModal").style.display = "flex";
}

function closeAbout() {
  document.getElementById("aboutModal").style.display = "none";
}

function openDiscord() {
  document.getElementById("discordModal").style.display = "flex";
}

function closeDiscord() {
  document.getElementById("discordModal").style.display = "none";
}

/* RECRUTAMENTO */
function sendRecruit() {
  alert("Enviado!");
  closeRecruit();
}
