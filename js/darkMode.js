document.addEventListener("DOMContentLoaded", function(){

    const darkModeInput = document.getElementById("darkModeInput");
    
    const darkThemeBox = document.getElementById("darkTheme");

    checked();
    
    setInterval(checked, 100); // Consultar cada segundo

    darkModeInput.addEventListener("click", function(){
        document.body.classList.toggle('dark');     //AL BODY SE LE AGREGA LA CLASE 'DARK'
    
        //Guardamos el modo en localStorage
        if (document.body.classList.contains('dark')) {
            localStorage.setItem('dark-mode', 'true');      //SE GUARDA EN EL STORAGE QUE EL MODO OSCURO ESTA ACTIVO
        } else {
            localStorage.setItem('dark-mode', 'false');     //SE GUARDA EN EL STORAGE QUE EL MODO OSCURO ESTA DESACTIVO
        }
    });
    
    // Obtenemos el modo actual
    if (localStorage.getItem('dark-mode') === 'true') {
        document.body.classList.add('dark');
    } else {                                            //DEPENDIENDO DE SI EN EL STORAGE ESTE ACTIVO O NO ES EL TEMA
        document.body.classList.remove('dark');         //  QUE SE APLICARA A LA PAGINA
    }

    function checked(){
        // Obtenemos el modo actual
        if (localStorage.getItem('dark-mode') === 'true') {
            darkThemeBox.checked = true;
        } else {                                            //DEPENDIENDO DE SI EN EL STORAGE ESTE ACTIVO O NO ES EL TEMA
            darkThemeBox.checked = false;
        }
    }
});