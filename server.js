const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

/* =========================
   ARQUIVOS ESTÁTICOS
========================= */
app.use(express.static(path.join(__dirname)));

/* =========================
   ROTA PRINCIPAL
========================= */
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

/* =========================
   INICIAR SERVIDOR
========================= */
app.listen(PORT, () => {
  console.log(`VALK HUB ONLINE`);
  console.log(`http://localhost:${PORT}`);
});