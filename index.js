const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;

app.use(cors());
app.use(express.json())

// DB Connection
const conn = require("./db/conn")
conn()

//Routes
const routes = require("./routes/router")

app.use("/", routes)

app.listen(port, '0.0.0.0', () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
