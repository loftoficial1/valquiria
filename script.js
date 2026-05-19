/* PARTICLES */
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

/* MEMBERS */
const members = [
  { name: "Notch", role: "Líder" },
  { name: "Steve", role: "Membro" },
  { name: "Herobrine", role: "Lenda" }
];

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

/* MODAIS */
function openRecruit(){ document.getElementById("recruitModal").style.display="flex"; }
function closeRecruit(){ document.getElementById("recruitModal").style.display="none"; }

function openAbout(){ document.getElementById("aboutModal").style.display="flex"; }
function closeAbout(){ document.getElementById("aboutModal").style.display="none"; }

function openMembers(){
  document.getElementById("membersModal").style.display="flex";
  loadMembers();
}
function closeMembers(){ document.getElementById("membersModal").style.display="none"; }

function openDiscord(){ document.getElementById("discordModal").style.display="flex"; }
function closeDiscord(){ document.getElementById("discordModal").style.display="none"; }

/* RECRUTAMENTO */
function sendRecruit(){
  alert("Enviado!");
  closeRecruit();
}
