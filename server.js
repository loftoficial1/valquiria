const express = require("express");
const fs = require("fs");

const app = express();

app.use(express.json());
app.use(express.static("public"));

const FILE = "./members.json";

// 🔥 GET MEMBERS (site)
app.get("/members", (req, res) => {
    res.json(JSON.parse(fs.readFileSync(FILE)));
});

// ➕ ADD MEMBER (painel local)
app.post("/members", (req, res) => {
    const data = JSON.parse(fs.readFileSync(FILE));

    data.push({
        nick: req.body.nick,
        cargo: req.body.cargo
    });

    fs.writeFileSync(FILE, JSON.stringify(data, null, 2));

    res.json({ ok: true });
});

// ❌ REMOVE MEMBER
app.delete("/members/:index", (req, res) => {
    const data = JSON.parse(fs.readFileSync(FILE));

    data.splice(req.params.index, 1);

    fs.writeFileSync(FILE, JSON.stringify(data, null, 2));

    res.json({ ok: true });
});

app.listen(3000, () => {
    console.log("rodando http://localhost:3000");
});