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

/* SONS */
const hoverSound = document.getElementById("hoverSound");
const clickSound = document.getElementById("clickSound");

function playHover(){
  hoverSound.currentTime = 0;
  hoverSound.volume = 0.3;
  hoverSound.play();
}

function playClick(){
  clickSound.currentTime = 0;
  clickSound.volume = 0.5;
  clickSound.play();
}

/* MODAIS */
function openRecruit(){ document.getElementById("recruitModal").style.display="flex"; }
function closeRecruit(){ document.getElementById("recruitModal").style.display="none"; }

function openAbout(){ document.getElementById("aboutModal").style.display="flex"; }
function closeAbout(){ document.getElementById("aboutModal").style.display="none"; }

function openMembers(){
  document.getElementById("membersModal").style.display="flex";

  const grid = document.getElementById("membersGrid");
  grid.innerHTML = "";

  const members = [
    { name: "Notch" },
    { name: "Steve" },
    { name: "Herobrine" }
  ];

  members.forEach(m => {
    const div = document.createElement("div");
    div.className = "card";
    div.innerHTML = `
      <img src="https://mc-heads.net/avatar/${m.name}/100">
      <p>${m.name}</p>
    `;
    grid.appendChild(div);
  });
}

function closeMembers(){ document.getElementById("membersModal").style.display="none"; }

function openDiscord(){ document.getElementById("discordModal").style.display="flex"; }
function closeDiscord(){ document.getElementById("discordModal").style.display="none"; }

/* RECRUTAMENTO */
function sendRecruit(){
  const nick = document.getElementById("nick").value;
  const age = document.getElementById("age").value;
  const reason = document.getElementById("reason").value;

  if(!nick || !age || !reason){
    alert("Preencha tudo!");
    return;
  }

  alert("Enviado!");
  closeRecruit();
}
