const express = require('express')
const cors = require('cors')
const app = express();

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.sendFile(__dirname+ '/index.html')
  })
  

app.listen(3002, ()=>console.log("Escuchando en 3002: http://localhost:3002/") );
