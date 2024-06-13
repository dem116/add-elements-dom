 // Aquí tu código

const lista = document.getElementById('lista');
const botonAgregar = document.getElementById('agregar');

botonAgregar.addEventListener('click', function() {
    const nuevoElemento = prompt('Ingresa un nuevo elemento para la lista:');
     const li = document.createElement('li');
     li.textContent = nuevoElemento;
     lista.appendChild(li);
 } )