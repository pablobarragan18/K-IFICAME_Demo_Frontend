
document.addEventListener("DOMContentLoaded", function() {
    // Obtén el valor de "mes" de la URL
    const urlParams = new URLSearchParams(window.location.search);
    const mes = parseInt(urlParams.get("mes"));
    const semestre = parseInt(urlParams.get("semestre"));

    // Selecciona todos los botones con la clase "btn_month"
    const botonesMes = document.querySelectorAll(".btn_month");

    // Recorre los botones y agrega la clase "active" al botón correspondiente
    botonesMes.forEach(function(boton) {
        const botonMes = parseInt(boton.getAttribute("data-mes"));
        if (botonMes === mes) {
            boton.classList.add("active");
        }
        else if (botonMes === semestre) {
            boton.classList.add("active");
        }
    });
});