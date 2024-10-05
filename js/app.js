// Selecciona el botón y el párrafo del DOM
const button = document.getElementById('clickButton');
const countDisplay = document.getElementById('count');

// Inicializa el contador
let count = 0;

// Función para actualizar el contador y la interfaz de usuario
function updateCount() {
    count++; // Incrementa el contador
    countDisplay.textContent = 'Número de clics: ' + count; // Actualiza el texto del párrafo
}

// Asigna la función al evento 'click' del botón
button.addEventListener('click', updateCount);
