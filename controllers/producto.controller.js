const path = require('path');
const Inventario = require('../models/inventario');

let inventario = new Inventario();
let productos = inventario.datos;

const mostrarIndex = (req, res) => {
  res.sendFile(path.join(__dirname, '../public/index.html'));
};

const agregarProducto = (req, res) => {
  const nuevoProducto = req.body;
  inventario.agregar(nuevoProducto)
    ? res.json({ msg: 'agregado' })
    : res.json({ msg: `Producto con ID ${nuevoProducto.codigo} ya existe.` });
};

const obtenerProductos = (req, res) => {
  res.json(productos);
};

const obtenerProductoPorCodigo = (req, res) => {
  const codigo = parseInt(req.params.codigo);
  const producto = inventario.buscarBinario(codigo);
  producto.encontrado
    ? res.json(producto.elemento)
    : res.json({ msg: 'no encontrado' });
};

const eliminarProducto = (req, res) => {
  const codigo = parseInt(req.params.codigo);
  inventario.eliminar(codigo)
    ? res.json({ msg: `Producto con ID ${codigo} eliminado.` })
    : res.json({ msg: 'no encontrado' });
};

module.exports = {
  mostrarIndex,
  agregarProducto,
  obtenerProductos,
  obtenerProductoPorCodigo,
  eliminarProducto,
};
