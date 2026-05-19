/* PARTICLES */
particlesJS("particles-js", {
  particles: {
    number: { value: 50 },
    color: { value: "#ff0000" },
    shape: { type: "circle" },
    opacity: 0.5,
    size: 3,
    move: { enable: true, speed: 2 }
  }
});

/* MODAIS */
function openRecruit(){
  document.getElementById("recruitModal").style.display = "flex";
}

function closeRecruit(){
  document.getElementById("recruitModal").style.display = "none";
}

function openAbout(){
  document.getElementById("aboutModal").style.display = "flex";
}

function closeAbout(){
  document.getElementById("aboutModal").style.display = "none";
}

function openMembers(){
  const modal = document.getElementById("membersModal");
  modal.style.display = "flex";

  const grid = document.getElementById("membersGrid");
  grid.innerHTML = "";

  const members = [
    "Notch",
    "Steve",
    "Herobrine"
  ];

  members.forEach(name => {
    const card = document.createElement("div");
    card.className = "card";

    card.innerHTML = `
      <img src="https://mc-heads.net/avatar/${name}/100">
      <p>${name}</p>
    `;

    grid.appendChild(card);
  });
}

function closeMembers(){
  document.getElementById("membersModal").style.display = "none";
}

function openDiscord(){
  document.getElementById("discordModal").style.display = "flex";
}

function closeDiscord(){
  document.getElementById("discordModal").style.display = "none";
}

/* RECRUTAMENTO */
function sendRecruit(){
  const nick = document.getElementById("nick").value;
  const age = document.getElementById("age").value;
  const reason = document.getElementById("reason").value;

  if(!nick || !age || !reason){
    alert("Preencha todos os campos!");
    return;
  }

  alert("Enviado com sucesso!");
  closeRecruit();
}
