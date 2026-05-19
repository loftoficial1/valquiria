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
   SUPABASE INIT
========================= */

const SUPABASE_URL = "SUA_URL";
const SUPABASE_KEY = "SUA_KEY";

const client = supabase.createClient(
  SUPABASE_URL,
  SUPABASE_KEY
);

/* =========================
   ELEMENTOS
========================= */

const menu = document.getElementById("menu");
const recruitBtn = document.getElementById("recruitBtn");
const aboutBtn = document.getElementById("aboutBtn");

/* =========================
   CAMERA EFFECT
========================= */

if (recruitBtn && aboutBtn && menu) {

  recruitBtn.addEventListener("mouseover", () => {
    menu.style.transform = "rotateY(-8deg) scale(1.03)";
  });

  aboutBtn.addEventListener("mouseover", () => {
    menu.style.transform = "rotateY(8deg) scale(1.03)";
  });

  document.querySelector(".buttons").addEventListener("mouseleave", () => {
    menu.style.transform = "rotateY(0deg) scale(1)";
  });

}

/* =========================
   MODAIS
========================= */

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
  window.open("https://discord.gg/gdSnKZKMrf", "_blank");
}

/* =========================
   MEMBROS (SUPABASE)
========================= */

window.openMembers = async function () {

  const modal = document.getElementById("membersModal");
  const grid = document.getElementById("membersGrid");

  modal.style.display = "flex";
  grid.innerHTML = "Carregando...";

  try {

    const { data, error } =
      await client.from("members").select("*");

    if (error) {
      grid.innerHTML = "Erro ao carregar membros.";
      return;
    }

    if (!data || data.length === 0) {
      grid.innerHTML = "Nenhum membro encontrado.";
      return;
    }

    grid.innerHTML = "";

    data.forEach(member => {

      grid.innerHTML += `
        <div class="member-card">
          <img src="https://mc-heads.net/avatar/${member.name}/100">
          <h3>${member.name}</h3>
          <div class="role">${member.role}</div>
        </div>
      `;

    });

  } catch (err) {
    console.error(err);
    grid.innerHTML = "Erro de conexão.";
  }

};

window.closeMembers = function () {
  document.getElementById("membersModal").style.display = "none";
};

/* =========================
   WEBHOOK
========================= */

const WEBHOOK_URL = "COLE_SUA_WEBHOOK";

/* =========================
   RECRUTAMENTO
========================= */

async function sendRecruit() {

  const nick = document.getElementById("nick").value;
  const age = document.getElementById("age").value;
  const role = document.getElementById("role").value;
  const reason = document.getElementById("reason").value;

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
      headers: {
        "Content-Type": "application/json"
      },
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

}
