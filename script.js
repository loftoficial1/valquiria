/* PARTICLES */

particlesJS("particles-js", {

  particles: {

    number: {
      value: 50
    },

    color: {
      value: "#ff0000"
    },

    shape: {
      type: "circle"
    },

    opacity: {
      value: 0.5
    },

    size: {
      value: 3
    },

    move: {
      enable: true,
      speed: 2
    }

  }

});

/* ELEMENTOS */

const menu =
  document.getElementById("menu");

const recruitBtn =
  document.getElementById("recruitBtn");

const aboutBtn =
  document.getElementById("aboutBtn");

/* CAMERA */

recruitBtn.addEventListener(
  "mouseover",
  () => {

    menu.style.transform =
      "rotateY(-8deg) scale(1.03)";

  }
);

aboutBtn.addEventListener(
  "mouseover",
  () => {

    menu.style.transform =
      "rotateY(8deg) scale(1.03)";

  }
);

document
.querySelector(".buttons")
.addEventListener(
  "mouseleave",
  () => {

    menu.style.transform =
      "rotateY(0deg) scale(1)";

  }
);

/* CLICKS */

recruitBtn.addEventListener(
  "click",
  openRecruit
);

aboutBtn.addEventListener(
  "click",
  openAbout
);

/* MODAIS */

function openRecruit() {

  document.getElementById(
    "recruitModal"
  ).style.display = "flex";

}

function closeRecruit() {

  document.getElementById(
    "recruitModal"
  ).style.display = "none";

}

function openAbout() {

  document.getElementById(
    "aboutModal"
  ).style.display = "flex";

}

function closeAbout() {

  document.getElementById(
    "aboutModal"
  ).style.display = "none";

}

/* DISCORD */

function openDiscord() {

  window.open(
    "https://discord.gg/SEUCONVITE",
    "_blank"
  );

}

/* MEMBROS */

const members = [

  {
    name: "Notch",
    role: "Líder"
  },

  {
    name: "Steve",
    role: "Membro"
  },

  {
    name: "Herobrine",
    role: "Elite"
  }

];

function openMembers() {

  document.getElementById(
    "membersModal"
  ).style.display = "flex";

  const grid =
    document.getElementById(
      "membersGrid"
    );

  grid.innerHTML = "";

  members.forEach(member => {

    const card =
      document.createElement("div");

    card.className =
      "member-card";

    card.innerHTML = `

      <img src="https://mc-heads.net/avatar/${member.name}/100">

      <h3>${member.name}</h3>

      <div class="role">
        ${member.role}
      </div>

    `;

    grid.appendChild(card);

  });

}

function closeMembers() {

  document.getElementById(
    "membersModal"
  ).style.display = "none";

}

/* WEBHOOK */

const WEBHOOK_URL =
  "COLE_SUA_WEBHOOK";

/* RECRUTAMENTO */

async function sendRecruit() {

  const nick =
    document.getElementById("nick").value;

  const age =
    document.getElementById("age").value;

  const role =
    document.getElementById("role").value;

  const reason =
    document.getElementById("reason").value;

  if(
    !nick ||
    !age ||
    !role ||
    !reason
  ) {

    alert(
      "Preencha todos os campos!"
    );

    return;
  }

  const payload = {

    embeds: [

      {

        title:
          "📥 Novo Recrutamento",

        color:
          16711680,

        fields: [

          {
            name: "👤 Nick",
            value: nick
          },

          {
            name: "🎂 Idade",
            value: age
          },

          {
            name: "⚔ Função",
            value: role
          },

          {
            name: "📝 Motivo",
            value: reason
          }

        ],

        footer: {
          text: "VALK HUB"
        },

        timestamp:
          new Date()

      }

    ]

  };

  try {

    await fetch(
      WEBHOOK_URL,
      {

        method: "POST",

        headers: {
          "Content-Type":
            "application/json"
        },

        body:
          JSON.stringify(payload)

      }
    );

    alert(
      "Recrutamento enviado!"
    );

    closeRecruit();

    document.getElementById(
      "nick"
    ).value = "";

    document.getElementById(
      "age"
    ).value = "";

    document.getElementById(
      "role"
    ).value = "";

    document.getElementById(
      "reason"
    ).value = "";

  }

  catch(err) {

    console.error(err);

    alert(
      "Erro ao enviar webhook."
    );

  }

}
