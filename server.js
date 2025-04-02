const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static('public'));

const Inventario = require('./inventario')
let inventario = new Inventario()
let productos = inventario.datos

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');  
})

app.post('/agregar', (req, res) => {
  const nuevoProducto = req.body;
  inventario.agregar(nuevoProducto) 
  ? res.json({msg:'agregado'}) 
  : res.json({ msg: `Producto con ID ${nuevoProducto.codigo} ya existe.`})  
})

app.get('/productos',(req,res)=>{
  res.json(productos);
})

app.get('/productos/:codigo',(req,res)=>{
  const codigo = parseInt(req.params.codigo)
  // algo que aprendí
  // const idEsIgual = element => element.codigo == codigo; 
  // const producto = productos.find(idEsIgual)
  const producto = inventario.buscarBinario(codigo)
  producto.encontrado ? res.json(producto.elemento) : res.json({msg: "no encontrado"})
})

app.delete('/productos/:codigo',(req,res)=>{
  const codigo = parseInt(req.params.codigo)

  inventario.eliminar(codigo) 
  ? res.json({ msg: `Producto con ID ${codigo} eliminado.` })
  : res.json({msg: "no encontrado"})
})

app.listen(3002, ()=>console.log("Escuchando en 3002: http://localhost:3002/") );