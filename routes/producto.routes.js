const express = require('express');
const router = express.Router();
const {
  mostrarIndex,
  agregarProducto,
  obtenerProductos,
  obtenerProductoPorCodigo,
  eliminarProducto
} = require('../controllers/producto.controller');

router.get('/', mostrarIndex);
router.post('/agregar', agregarProducto);
router.get('/productos', obtenerProductos);
router.get('/productos/:codigo', obtenerProductoPorCodigo);
router.delete('/productos/:codigo', eliminarProducto);

module.exports = router;

// const express = require('express');

// const createRoutes = () => {
// const productRoutes = express.Router()
 
// const Inventario = require('../inventario')
// let inventario = new Inventario()
// let productos = inventario.datos

// productRoutes.get('/', (req, res) => {
//   res.sendFile(__dirname + '../public/index.html');  
// })

// productRoutes.post('/agregar', (req, res) => {
//   const nuevoProducto = req.body;
//   inventario.agregar(nuevoProducto) 
//   ? res.json({msg:'agregado'}) 
//   : res.json({ msg: `Producto con ID ${nuevoProducto.codigo} ya existe.`})  
// })

// productRoutes.get('/productos',(req,res)=>{
//   res.json(productos);
// })

// productRoutes.get('/productos/:codigo',(req,res)=>{
//   const codigo = parseInt(req.params.codigo)
//   // algo que aprendí
//   // const idEsIgual = element => element.codigo == codigo; 
//   // const producto = productos.find(idEsIgual)
//   const producto = inventario.buscarBinario(codigo)
//   producto.encontrado ? res.json(producto.elemento) : res.json({msg: "no encontrado"})
// })
    
// productRoutes.delete('/productos/:codigo',(req,res)=>{
//   const codigo = parseInt(req.params.codigo)

//   inventario.eliminar(codigo) 
//   ? res.json({ msg: `Producto con ID ${codigo} eliminado.` })
//   : res.json({msg: "no encontrado"})
// })
// return productRoutes
// }

// module.exports = createRoutes