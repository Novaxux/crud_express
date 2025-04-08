const express = require('express');
const cors = require('cors');
const app = express();
const createRoutes = require('./routes/producto.routes');

app.use(cors());
app.use(express.json());
app.use(express.static('public'));
app.use(createRoutes);

app.listen(3002, () =>
  console.log('Escuchando en 3002: http://localhost:3002/')
);
