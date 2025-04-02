function obtenerValores() {
  let cod=parseInt(document.getElementById('codigo').value);
  let nom=document.getElementById('nombre').value;
  return {cod, nom};
}
function limpiarCasillas() {
  document.getElementById('codigo').value='';
  document.getElementById('nombre').value='';
}
document.getElementById('formSubmit').addEventListener('submit', function (e) {
    e.preventDefault();
    // Recuperar valores desde la función obtenerValores()
    let { cod, nom } = obtenerValores();
    let div = document.getElementById('detalles');
    let estatus = document.getElementById('estatus');

    limpiarCasillas(); // Limpiar las cajas de texto después de obtener los valores

    fetch('http://localhost:3002/agregar', {
        method: 'POST',
        body: JSON.stringify({
            codigo: cod,  
            nombre: nom
        }),
        headers: {
            'Content-Type': 'application/json; charset=UTF-8'
        },
    })
    .then(response => response.json())
    .then(agregado => {
        estatus.innerHTML = agregado.msg
        setTimeout(()=> estatus.innerHTML= '' , 2000)
    });
});

  const btnList=document.getElementById('btnList');
  btnList.addEventListener('click',()=>{
      let div=document.getElementById('detalles');
      div.innerHTML='';
      fetch('http://localhost:3002/productos')
        .then((response) => response.json())
        .then((productos) =>{
            productos.forEach(producto => {
                div.innerHTML+=`
                <article class = 'product'>
                    <h3>Codigo: ${producto.codigo} </h3>
                    <p>Nombre: ${producto.nombre}</p>
                </article>`;
            });
        });
  });

 //   eliminar
 const btnElim = document.getElementById('btnElim');

 btnElim.addEventListener('click', () => {
     let elemento = document.getElementById('eliminar').value.trim();
     document.getElementById('eliminar').value = ''
     let div = document.getElementById('detalles');
     let estatus = document.getElementById('estatus');
 
     // Validar que sea un número válido
     if (!elemento || isNaN(elemento)) {
         estatus.innerHTML = '<p>Ingrese un código válido</p>';
         setTimeout(() => estatus.innerHTML = '', 2000);
         return;
     }
 
     fetch(`http://localhost:3002/productos/${parseInt(elemento)}`, {
         method: 'DELETE',
     })
     .then(response => response.json())    
     .then(response => {
         estatus.innerHTML = response.msg;  // Sobrescribe en lugar de concatenar
         setTimeout(() => estatus.innerHTML = '', 2000);
         div.innerHTML = ''
     })
     .catch(error => {
         console.error('Error en la solicitud:', error);
         div.innerHTML = '<p>Ocurrió un error al eliminar el producto</p>';
         setTimeout(() => div.innerHTML = '', 2000);
     });
 });
 
//  buscar
 const btnBusc = document.getElementById('btnBusc');
 btnBusc.addEventListener('click',()=>{
    let elemento=document.getElementById('buscar').value;
    document.getElementById('buscar').value = '';
    let div=document.getElementById('detalles');
    let estatus=document.getElementById('estatus');
    fetch(`http://localhost:3002/productos/${parseInt(elemento)}`)
    .then(response =>response.json())
    .then(producto =>{
        console.log(producto)
        if (producto.hasOwnProperty("msg")){
            estatus.innerHTML= producto.msg 
            div.innerHTML=''
            setTimeout(()=>estatus.innerHTML = '',2000)   
        }else{
            div.innerHTML=`
            <article class = 'product'>
                <h3>Codigo: ${producto.codigo} </h3>
                <p>Nombre: ${producto.nombre}</p>
            </article>`;
        }
    })
 });
