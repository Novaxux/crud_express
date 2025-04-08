class Inventario {
  constructor() {
    this.datos = [];
  }
  agregar(producto) {
    let encontrado = this.buscarBinario(producto.codigo);
    if (!encontrado.encontrado) {
      this._insertar(producto, encontrado.limInferior);
      return true;
    } else return false;
  }
  eliminar(codigo) {
    let buscar = this.buscarBinario(codigo);

    if (buscar.encontrado) {
      for (let f = buscar.medio; f < this.datos.length - 1; f++)
        this.datos[f] = this.datos[f + 1];
      this.datos.pop();
    }
    return buscar.encontrado;
  }
  buscarBinario(codigo) {
    let limInferior = 0;
    let limSuperior = this.datos.length - 1;
    let encontrado = false;
    let medio = null;
    let elemento = null;
    while (limInferior <= limSuperior && !encontrado) {
      medio = Math.floor((limInferior + limSuperior) / 2);
      if (this.datos[medio].codigo == codigo) {
        encontrado = true;
        elemento = this.datos[medio];
      } else if (this.datos[medio].codigo < codigo) limInferior = medio + 1;
      else limSuperior = medio - 1;
    }
    return { encontrado, elemento, medio, limInferior };
  }
  listar() {
    let res = "";
    for (let i = 0; i < this.datos.length; i++)
      if (this.datos[i]) res += this.datos[i].infoHtml();
    return res;
  }
  _insertar(valor, posicion) {
    for (let i = this.datos.length; i > posicion; i--)
      this.datos[i] = this.datos[i - 1];
    this.datos[posicion] = valor;
  }
}

module.exports = Inventario;
