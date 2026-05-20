/* =========================
   PARTICLES
========================= */

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

/* =========================
   ELEMENTOS (SAFE)
========================= */

window.addEventListener("DOMContentLoaded", () => {

  const menu = document.getElementById("menu");
  const recruitBtn = document.getElementById("recruitBtn");
  const aboutBtn = document.getElementById("aboutBtn");

  if (!menu || !recruitBtn || !aboutBtn) return;

  recruitBtn.addEventListener("mouseover", () => {
    menu.style.transform = "rotateY(-8deg) scale(1.03)";
  });

  aboutBtn.addEventListener("mouseover", () => {
    menu.style.transform = "rotateY(8deg) scale(1.03)";
  });

  document.querySelector(".buttons")?.addEventListener("mouseleave", () => {
    menu.style.transform = "rotateY(0deg) scale(1)";
  });

});

/* =========================
   CAMERA (ANTI BUG)
========================= */

if (menu && recruitBtn && aboutBtn) {

  recruitBtn.addEventListener("mouseover", () => {
    menu.style.transform = "rotateY(-8deg) scale(1.03)";
  });

  aboutBtn.addEventListener("mouseover", () => {
    menu.style.transform = "rotateY(8deg) scale(1.03)";
  });

  document.querySelector(".buttons")?.addEventListener("mouseleave", () => {
    menu.style.transform = "rotateY(0deg) scale(1)";
  });

}

/* =========================
   MODAIS
========================= */

window.openRecruit = function () {
  document.getElementById("recruitModal").style.display = "flex";
};

window.closeRecruit = function () {
  document.getElementById("recruitModal").style.display = "none";
};

window.openAbout = function () {
  document.getElementById("aboutModal").style.display = "flex";
};

window.closeAbout = function () {
  document.getElementById("aboutModal").style.display = "none";
};

/* =========================
   DISCORD (LINK DIRETO)
========================= */

window.openDiscord = function () {
  window.open("https://discord.gg/SEUCONVITE", "_blank");
};

/* =========================
   MEMBROS (FIX ESTÁVEL)
========================= */

const members = [
  { name: "Notch", role: "Líder" },
  { name: "Steve", role: "Membro" },
  { name: "Herobrine", role: "Elite" }
];

window.openMembers = function () {

  const modal = document.getElementById("membersModal");
  const grid = document.getElementById("membersGrid");

  modal.style.display = "flex";

  if (!grid) return;

  grid.innerHTML = "";

  members.forEach(member => {

    const card = document.createElement("div");
    card.className = "member-card";

    card.innerHTML = `
      <img src="https://mc-heads.net/avatar/${member.name}/100">
      <h3>${member.name}</h3>
      <div class="role">${member.role}</div>
    `;

    grid.appendChild(card);

  });

};

window.closeMembers = function () {
  document.getElementById("membersModal").style.display = "none";
};

/* =========================
   WEBHOOK
========================= */

const WEBHOOK_URL = "COLE_SUA_WEBHOOK";

/* =========================
   RECRUTAMENTO (ANTI ERRO)
========================= */

window.sendRecruit = async function () {

  const nick = document.getElementById("nick")?.value;
  const age = document.getElementById("age")?.value;
  const role = document.getElementById("role")?.value;
  const reason = document.getElementById("reason")?.value;

  if (!nick || !age || !role || !reason) {
    alert("Preencha todos os campos!");
    return;
  }

  const payload = {
    embeds: [
      {
        title: "📥 Novo Recrutamento",
        color: 16711680,
        fields: [
          { name: "Nick", value: nick },
          { name: "Idade", value: age },
          { name: "Função", value: role },
          { name: "Motivo", value: reason }
        ],
        footer: { text: "VALK HUB" },
        timestamp: new Date()
      }
    ]
  };

  try {

    await fetch(WEBHOOK_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload)
    });

    alert("Recrutamento enviado!");
    closeRecruit();

    document.getElementById("nick").value = "";
    document.getElementById("age").value = "";
    document.getElementById("role").value = "";
    document.getElementById("reason").value = "";

  } catch (err) {
    console.error(err);
    alert("Erro ao enviar webhook.");
  }

};
