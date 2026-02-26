// Esperar a que el botón de inscripción sea clickeado
const btn = document.getElementById('btn-reir');
const zonaChiste = document.getElementById('zona-chiste');

btn.addEventListener('click', () => {
    alert("¡Excelente elección! Prepárate para las risas.");
    zonaChiste.classList.remove('oculto'); // Muestra la sección de chistes
});

function generarChiste() {
    const chistes = [
        "¿Por qué los programadores confunden Halloween con Navidad? Porque Oct 31 == Dec 25.",
        "Un SQL entra en un bar, se acerca a dos mesas y pregunta: '¿Puedo unirme?'",
        "Hay 10 tipos de personas en el mundo: las que entienden binario y las que no."
    ];
    
    const random = Math.floor(Math.random() * chistes.length);
    document.getElementById('texto-chiste').innerText = chistes[random];
}
