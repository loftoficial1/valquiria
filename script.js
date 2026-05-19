const MEMBERS_URL = "https://github.com/loftoficial1/valquiria/blob/d48fb8b4e9ddc896220a2c35925b6940c8c083f0/members.json";

async function loadMembers() {
    try {
        const res = await fetch(MEMBERS_URL);
        const data = await res.json();

        const grid = document.getElementById("membersGrid");
        grid.innerHTML = "";

        data.forEach(m => {
            grid.innerHTML += `
                <div class="memberCard">
                    <img src="https://mc-heads.net/avatar/${m.nick}/100">
                    <h2>${m.nick}</h2>
                    <div class="cargo">${m.cargo}</div>
                </div>
            `;
        });

    } catch (err) {
        console.log("erro ao carregar membros", err);
    }
}

window.addEventListener("load", loadMembers);
