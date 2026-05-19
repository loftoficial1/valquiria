//
// =====================
// CONFIG API (LOCALHOST)
// =====================
//
const API = "http://localhost:3000";

//
// =====================
// MODAIS
// =====================
//

const recruitModal = document.getElementById("recruitModal");
const membersModal = document.getElementById("membersModal");
const membersGrid = document.getElementById("membersGrid");

function abrirForm() {
    recruitModal.style.display = "flex";
}

function fecharForm() {
    recruitModal.style.display = "none";
}

function abrirMembros() {
    membersModal.style.display = "flex";
    loadMembers();
}

function fecharMembros() {
    membersModal.style.display = "none";
}

//
// =====================
// RECRUTAMENTO (FRONT ONLY)
// =====================
//

function enviarForm() {
    const nick = document.getElementById("nick").value;
    const funcao = document.getElementById("funcao").value;
    const descricao = document.getElementById("descricao").value;
    const motivo = document.getElementById("motivo").value;

    if (!nick) {
        alert("Digite seu nick!");
        return;
    }

    alert("Recrutamento enviado!");

    document.getElementById("nick").value = "";
    document.getElementById("descricao").value = "";
    document.getElementById("motivo").value = "";

    fecharForm();
}

//
// =====================
// CARREGAR MEMBROS (API LOCAL)
// =====================
//

async function loadMembers() {
    try {
        const res = await fetch(`${API}/members`);
        const data = await res.json();

        membersGrid.innerHTML = "";

        data.forEach((m) => {
            const card = document.createElement("div");
            card.className = "memberCard";

            card.innerHTML = `
                <img src="https://mc-heads.net/avatar/${m.nick}/100">
                <h2>${m.nick}</h2>
                <div class="cargo">${m.cargo}</div>
            `;

            membersGrid.appendChild(card);
        });

    } catch (err) {
        console.log("Erro API:", err);
    }
}

//
// =====================
// PAINEL LOCAL (ADICIONAR)
// =====================
//

async function addMember(nick, cargo) {
    await fetch(`${API}/members`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ nick, cargo })
    });
}

// opcional (caso use painel HTML)
function addFromPanel() {
    const nick = document.getElementById("adminNick").value;
    const cargo = document.getElementById("adminCargo").value;

    if (!nick || !cargo) return;

    addMember(nick, cargo);
}

//
// =====================
// FECHAR AO CLICAR FORA
// =====================
//

window.addEventListener("click", (e) => {
    if (e.target === membersModal) {
        fecharMembros();
    }

    if (e.target === recruitModal) {
        fecharForm();
    }
});

//
// =====================
// INIT
// =====================
//

window.addEventListener("load", () => {
    loadMembers();
});