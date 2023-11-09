// Obtén referencias a los elementos select en tu HTML
const selectPais = document.getElementById("country");
const selectEstado = document.getElementById("state");
const selectCiudad = document.getElementById("city");

// Función para cargar datos de países
function cargarPaises() {
  fetch('/api/paises') 
    .then((response) => response.json())
    .then((data) => {

      data.forEach((pais) => {
        const option = document.createElement('option');
        option.value = pais.id;
        option.text = pais.name;
        selectPais.appendChild(option);
      });
    })
    .catch((error) => {
      console.error('Error al cargar datos de países:', error);
    });
}

function cargarEstados(paisId) {
  fetch(`/api/estados/${paisId}`) 
    .then((response) => response.json())
    .then((data) => {
      // Llena el menú de estados con los datos obtenidos
      selectEstado.innerHTML = ''; // Borra opciones anteriores
      data.forEach((estado) => {
        const option = document.createElement('option');
        option.value = estado.id;
        option.text = estado.name;
        selectEstado.appendChild(option);
      });
    })
    .catch((error) => {
      console.error('Error al cargar datos de estados:', error);
    });
}

// Función para cargar datos de ciudades
function cargarCiudades(estadoId) {
  fetch(`/api/ciudades/${estadoId}`) 
    .then((response) => response.json())
    .then((data) => {
      // Llena el menú de ciudades con los datos obtenidos
      selectCiudad.innerHTML = ''; 
      data.forEach((ciudad) => {
        const option = document.createElement('option');
        option.value = ciudad.id;
        option.text = ciudad.name;
        selectCiudad.appendChild(option);
      });
    })
    .catch((error) => {
      console.error('Error al cargar datos de ciudades:', error);
    });
}

// Escucha eventos de cambio en los select para cargar datos en tiempo real
selectPais.addEventListener('change', () => {
  const paisId = selectPais.value;
  if (paisId) {
    cargarEstados(paisId);
  }
});

selectEstado.addEventListener('change', () => {
  const estadoId = selectEstado.value;
  if (estadoId) {
    cargarCiudades(estadoId);
  }
});

// Inicia cargando datos de países al cargar la página
cargarPaises();
