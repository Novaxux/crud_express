const express = require('express')
const cors = require('cors')
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static('public'));

let productos = []

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');  
})

app.post('/data', (req, res) => {
  const nuevoProducto = req.body;
  productos.push(nuevoProducto)
  console.log(req.body.title);
  console.log(productos)
  res.json({msg:'agregado'}); 
})


app.listen(3002, ()=>console.log("Escuchando en 3002: http://localhost:3002/") );