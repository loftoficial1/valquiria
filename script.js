function showSection(id) {
  document.querySelectorAll("section").forEach(sec => {
    sec.classList.remove("active");
  });
  document.getElementById(id).classList.add("active");
}

// membros fake (você pode trocar depois)
const members = [
  { name: "RB Leader" },
  { name: "Player1" },
  { name: "Player2" }
];

const grid = document.getElementById("membersGrid");

members.forEach(m => {
  const div = document.createElement("div");
  div.className = "card";
  div.innerHTML = `<h3>${m.name}</h3>`;
  grid.appendChild(div);
});
