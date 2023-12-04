const express = require("express");
const app = express();
const routes = require("./routes");
const port = 8000;

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  res.header("Access-Control-Allow-Headers", "Content-Type");

  next();
});

app.use('/public/images', express.static('image'));
app.use("/api", routes);

app.listen(port, () => console.log(`Escuchando en http://localhost:${port}`));
