const cotizador = new API('f426c6b280b97e54d281dfb9f8a72c52d6520340257f350881fc20e683c82b49');
const ui = new Interfaz();

// Leer el formulario
const formulario = document.querySelector('#formulario');
// evenntListener ( Seleccionarlo )
formulario.addEventListener('submit', (e) => {
     e.preventDefault();

     //Leer la moneada seleccionada
     const monedaSelect = document.querySelector('#moneda');
     const monedaSeleccionada = monedaSelect.options[monedaSelect.selectedIndex].value;

     //Leer la Criptomoneada seleccionada
     const criptMonedaSelect = document.querySelector('#criptomoneda');
     const criptoMonedaSeleccionada = criptMonedaSelect.options[criptMonedaSelect.selectedIndex].value;

     // comprobar q ambos campos tengan al seleccionado
     if (monedaSeleccionada === '' || criptoMonedaSeleccionada === ''){
          // arrojar una alerta de error 
          ui.mostrarMensaje('Ambos casos son obligatorios', 'alert bg-danger text-center');
     }else{

     }
})