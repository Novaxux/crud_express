# CRUD nodejs 

## Moreno Carrillo José Manuel

# Explicación de Exportaciones y Nodemon
![imagen nodejs](./nodejs-new-pantone-black.png "nodejs")
### CommonJS (Node.js)
```javascript
// Exportar un elemento
module.exports = miFunction;

// Exportar múltiples elementos
module.exports = { suma, resta };
// O
exports.suma = (a, b) => a + b;
```

### ES Modules
```javascript
// Exportación por defecto
export default miFunction;

// Exportaciones con nombre
export function suma(a, b) { return a + b; }
// O
export { suma, resta };
```

## Nodemon

Herramienta para desarrollo en Node.js que reinicia automáticamente la aplicación cuando detecta cambios en los archivos.

### Instalación
```bash
npm install -g nodemon
# O como dependencia de desarrollo
npm install --save-dev nodemon
```

### Uso
```bash
nodemon app.js
# O en package.json
"scripts": {
  "dev": "nodemon app.js"
}
```