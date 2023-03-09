const express = require('express')
const cors = require('cors')
const app = express()

var corsOptions = {
    origin: "http://localhost:3000"
  };

app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.json({ message: "Server Status: ON" })
});

require('./app/routes/usuario.routes')(app);
require('./app/routes/sindicalista.routes')(app);
require('./app/routes/empresa.routes')(app);
require('./app/routes/dependente.routes')(app);

const Port = 3001;

app.listen(Port, () => {
    console.log(`Sindicado Server listening on port: ${Port}`)
});