const http = require("http");
 
const PORT = 3000;

const cards = [
  { name: "Dragao de Cobalto", type: "Criatura", attack: 7, defense: 5 },
  { name: "Guardia das Mares", type: "Criatura", attack: 4, defense: 8 },
  { name: "Banzini", type: "Criatura", attack: 10, defense: 10 },
  { name: "115", type: "Criatura", attack: 1000, defense: 0 },
  { name: "bola de ouro", type: "Criatura", attack: 5000, defense: 20000 },
];

const server = http.createServer((req, res) => {
  console.log(`${req.method} ${req.url}`);
 
  if (req.url === "/") {
    res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
    res.end("<h1>Bem-vindo à página inicial!</h1>");
    return;
  }
 
  if (req.url === "/sobre") {
    res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
    res.end("<h1>Tiago Duarte TGPSI24T</h1>");
    return;
  }
 
  if (req.url === "/cartas") {
    const items = cards.map(card => `<li>${card.name}</li>`).join("");
 
    res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
    res.write(`<h1>Cartas</h1><ul>${items}</ul>`);
    res.end(`${cards.length} cartas disponíveis`);
    return;
  }

  if (req.url === "/cartas/aleatoria") {
    const card = cards[Math.floor(Math.random() * cards.length)];
 
    res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
    res.end(`
      <h1>Carta Aleatória</h1>
      <p><strong>Nome:</strong> ${card.name}</p>
      <p><strong>Tipo:</strong> ${card.type}</p>
      <p><strong>Ataque:</strong> ${card.attack}</p>
      <p><strong>Defesa:</strong> ${card.defense}</p>`);
    return;
  }
 
  if (req.url === "/agora") {
    res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
    const now = new Date().toLocaleString("pt-PT");
    res.end(`${now}`);
    return;
  }
 
  res.writeHead(404, { "Content-Type": "text/html; charset=utf-8" });
  res.end(`<h1>404 — Página Não Encontrada</h1><p>O endereço pedido não existe neste servidor.</p>`);
});
 
server.listen(PORT, () => {
  console.log(`Server a correr em http://localhost:${PORT}`);
});