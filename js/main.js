


// countries.js

// Función para cargar el select con nombres de países desde un archivo JSON
function loadCountryNames() {
    const selectElement = document.getElementById("country-select");

    // Obtener los datos del archivo JSON usando una solicitud AJAX
    fetch('db/paisesCodigosNumericos.json')
        .then(response => response.json())
        .then(data => {
            // Iterar sobre los datos y agregar opciones al select
            data.forEach(country => {
                const option = document.createElement("option");
                option.value = country.nombre; // Valor del país (nombre)
                option.text = country.nombre; // Texto visible en el select (nombre)
                selectElement.appendChild(option);
            });
        })
        .catch(error => {
            console.error('Error al cargar los países:', error);
        });
}


