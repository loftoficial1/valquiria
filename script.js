/* =======================
   PARTICLES (opcional já no HTML)
======================= */
particlesJS("particles-js", {
  particles: {
    number: { value: 60 },
    color: { value: "#ff0000" },
    shape: { type: "circle" },
    opacity: { value: 0.5 },
    size: { value: 3 },
    line_linked: {
      enable: true,
      color: "#ff0000"
    },
    move: {
      enable: true,
      speed: 2
    }
  }
});

/* =======================
   MEMBROS
======================= */
const members = [
  { name: "Notch", role: "Líder" },
  { name: "Steve", role: "Membro" },
  { name: "Herobrine", role: "Lenda" }
];

/* =======================
   MEMBROS LOAD
======================= */
function loadMembers() {
  const grid = document.getElementById("membersGrid");
  grid.innerHTML = "";

  members.forEach(m => {
    const card = document.createElement("div");
    card.className = "card";

    card.innerHTML = `
      <img src="https://mc-heads.net/avatar/${m.name}/100">
      <h3>${m.name}</h3>
      <div class="tag">${m.role}</div>
    `;

    grid.appendChild(card);
  });
}

/* =======================
   MODAIS - ABRIR
======================= */
function openRecruit() {
  document.getElementById("recruitModal").style.display = "flex";
}

function openAbout() {
  document.getElementById("aboutModal").style.display = "flex";
}

function openMembers() {
  document.getElementById("membersModal").style.display = "flex";
  loadMembers();
}

function openDiscord() {
  document.getElementById("discordModal").style.display = "flex";
}

/* =======================
   MODAIS - FECHAR
======================= */
function closeRecruit() {
  document.getElementById("recruitModal").style.display = "none";
}

function closeAbout() {
  document.getElementById("aboutModal").style.display = "none";
}

function closeMembers() {
  document.getElementById("membersModal").style.display = "none";
}

function closeDiscord() {
  document.getElementById("discordModal").style.display = "none";
}

/* =======================
   RECRUTAMENTO
======================= */
function sendRecruit() {
  const nick = document.getElementById("nick").value;
  const age = document.getElementById("age").value;
  const reason = document.getElementById("reason").value;

  if (!nick || !age || !reason) {
    alert("Preencha todos os campos!");
    return;
  }

  alert("Recrutamento enviado com sucesso!");
  closeRecruit();

  document.getElementById("nick").value = "";
  document.getElementById("age").value = "";
  document.getElementById("reason").value = "";
}

/* =======================
   FECHAR AO CLICAR FORA
======================= */
window.onclick = function(event) {
  const modals = document.querySelectorAll(".modal");

  modals.forEach(m => {
    if (event.target === m) {
      m.style.display = "none";
    }
  });
};
