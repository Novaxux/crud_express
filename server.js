const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static('public'));

let productos = []

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');  
})

app.post('/agregar', (req, res) => {
  const nuevoProducto = req.body;
  if(productos.find(element => element.codigo == nuevoProducto.codigo)){
    res.json({ msg: `Producto con ID ${nuevoProducto.codigo} ya existe.`})  
  }else{
    productos.push(nuevoProducto);
    res.json({msg:'agregado'}); 
  }
})

app.get('/productos',(req,res)=>{
  res.json(productos);
})

app.get('/productos/:codigo',(req,res)=>{
  const codigo = parseInt(req.params.codigo)
  // algo que aprendí
  const idEsIgual = element => element.codigo == codigo; 
  const producto = productos.find(idEsIgual)

  producto ? res.json(producto) : res.json({msg: "no encontrado"})
})

app.delete('/productos/:codigo',(req,res)=>{
  const codigo = parseInt(req.params.codigo)
  const productoIndex = productos.findIndex( element => element.codigo == codigo)

  productoIndex !=-1 
  ? (productos.splice(productoIndex,1), res.json({ msg: `Producto con ID ${codigo} eliminado.` }))
  : res.json({msg: "no encontrado"})
})

app.listen(3002, ()=>console.log("Escuchando en 3002: http://localhost:3002/") );