const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
const PORT = 5000;

app.use(cors());
app.use(bodyParser.json());

// Senha secreta do ADM
const ADMIN_PASSWORD = "sua_senha_super_secreta";

// Endpoint de login
app.post("/login", (req, res) => {
  const { password } = req.body;
  if (password === ADMIN_PASSWORD) {
    return res.json({ success: true, message: "Login bem-sucedido!" });
  }
  return res.status(401).json({ success: false, message: "Senha incorreta!" });
});

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
