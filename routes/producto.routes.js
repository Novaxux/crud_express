const express = require('express');
const router = express.Router();
const {
  mostrarIndex,
  agregarProducto,
  obtenerProductos,
  obtenerProductoPorCodigo,
  eliminarProducto,
} = require('../controllers/producto.controller');

router.get('/', mostrarIndex);
router.post('/agregar', agregarProducto);
router.get('/productos', obtenerProductos);
router.get('/productos/:codigo', obtenerProductoPorCodigo);
router.delete('/productos/:codigo', eliminarProducto);

module.exports = router;
