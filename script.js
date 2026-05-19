/* ===== MEMBROS JSON ===== */

async function openMembers() {

  document.getElementById(
    "membersModal"
  ).style.display = "flex";

  const grid =
    document.getElementById(
      "membersGrid"
    );

  grid.innerHTML =
    "<p>Carregando...</p>";

  try {

    const response =
      await fetch("members.json");

    const members =
      await response.json();

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

  catch(err) {

    console.error(err);

    grid.innerHTML = `
      <p>
        Erro ao carregar membros.
      </p>
    `;

  }

}

function closeMembers() {

  document.getElementById(
    "membersModal"
  ).style.display = "none";

}
