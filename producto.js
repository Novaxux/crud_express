class Producto {
    constructor(codigo, nombre, cantidad, costo){
      this.codigo=codigo;
      this.nombre=nombre;
    }
    info(){
      return `Codigo: ${this.codigo} Nombre: ${this.nombre}`;
    }
    infoHtml(){
      return `<article class = 'product'><div><h3>Codigo: ${this.codigo} </h3>
                <p>Nombre: ${this.nombre}</p>
                </article>`;
    }
  }
 
  module.exports = Producto;