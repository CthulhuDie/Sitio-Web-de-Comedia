// Seleccionamos los elementos
const textoChiste = document.getElementById('chiste-texto');
const boton = document.getElementById('boton-chiste');

// Función para buscar el chiste
async function obtenerChiste() {
    textoChiste.innerText = "Cargando risas..."; // Feedback visual
    
    try {
        // Pedimos un chiste de programación en español
        const respuesta = await fetch('https://v2.jokeapi.dev/joke/Programming?lang=es&type=single');
        const datos = await respuesta.json();

        if (datos.joke) {
            textoChiste.innerText = datos.joke;
        } else {
            textoChiste.innerText = "No encontré chistes nuevos, pero ¡sigue programando!";
        }
    } catch (error) {
        textoChiste.innerText = "Error de conexión. ¡Hasta el servidor se rió!";
        console.error("Hubo un error:", error);
    }
}

// Escuchamos el clic
boton.addEventListener('click', obtenerChiste);
