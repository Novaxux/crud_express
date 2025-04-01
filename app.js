const Inventario = require(Inventario)
const Producto = require(Producto)

let inventario = new Inventario()

 function obtenerValores() {
  let cod=parseInt(document.getElementById('codigo').value);
  let nom=document.getElementById('nombre').value;
  let cant=parseInt(document.getElementById('cantidad').value);
  let cost=parseFloat(document.getElementById('costo').value);
  return {cod, nom, cant, cost};
}
function limpiarCasillas() {
  document.getElementById('codigo').value='';
  document.getElementById('nombre').value='';
  document.getElementById('cantidad').value='';
  document.getElementById('costo').value='';
}
  document.getElementById('formSubmit').addEventListener('submit',function (e){
    e.preventDefault();
    // recuperar cajas de texto y crear objeto
    let { cod, nom, cant, cost } = obtenerValores();
    let nuevo=new Producto(cod,nom,cant,cost);
    //agregar
    let div=document.getElementById('detalles');
    let agregado = inventario.agregar(nuevo)
    agregado ?  div.innerHTML = '<p>Nuevo</p>' + nuevo.infoHtml() : 
    div.innerHTML = '<p>Ya existe</p>'
    limpiarCasillas()
  });
 
  const btnList=document.getElementById('btnList');
  btnList.addEventListener('click',()=>{
      let div=document.getElementById('detalles');
    div.innerHTML=inventario.listar();
  });
  // lsitar invertido
  const btnListInv=document.getElementById('btnListInv');
  btnListInv.addEventListener('click',()=>{
      let div=document.getElementById('detalles');
    div.innerHTML=inventario.listarInvertido();
  });
//   extraer prim
  const btnExtr = document.getElementById('btnExtr');
  btnExtr.addEventListener('click',()=>{
      let div=document.getElementById('detalles');
      let extraido = inventario.extraerPrimerProductoHTML();
      extraido ? div.innerHTML =`<h3>Elemento extraído:</h3>${extraido.infoHtml()}`: 
      div.innerHTML = '<h3>Ningún elemento extraído</h3>'  
    });
  // extraer ultimo
  const btnExtrUlt = document.getElementById('btnExtrUlt');
  btnExtrUlt.addEventListener('click',()=>{
      let div=document.getElementById('detalles');
      let extraido = inventario.extraerUltimoProducto();
      extraido ? div.innerHTML =`<h3>Elemento extraído:</h3>${extraido.infoHtml()}`: 
      div.innerHTML = '<h3>Ningún elemento extraído</h3>'

  });
 //   eliminar
 const btnElim = document.getElementById('btnElim');
 btnElim.addEventListener('click',()=>{
    let elemento=document.getElementById('eliminar').value;
    let encontrado = inventario.eliminar(elemento);
    let div=document.getElementById('detalles');
    encontrado ? div.innerHTML=inventario.listar() : div.innerHTML = '<p>Codigo a eliminar no encontrado</p>';
 });
//  buscar
 const btnBusc = document.getElementById('btnBusc');
 btnBusc.addEventListener('click',()=>{
    let elemento=document.getElementById('buscar').value;
    
    let div=document.getElementById('detalles');
    let elementoEncontrado = inventario.buscarBinario(elemento).elemento
    div.innerHTML = elementoEncontrado ? elementoEncontrado.infoHtml() : '<p>No encontrada</p>';
 });
