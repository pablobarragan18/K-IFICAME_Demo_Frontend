    // Llama a cargarTabla al cargar la página y luego cada 2 minutos
    $(document).ready(function () {
        cargarChartCount();
        cargarDataTable();
        cargarInsatisfaccion();
        setInterval(cargarChartCount, 128000); // Consultar cada 2 minutos
        setInterval(cargarDataTable, 128000); // Consultar cada 2 minutos
        setInterval(cargarInsatisfaccion, 128000); // Consultar cada 2 minutos
    });

    function cargarChartCount() {
        $.ajax({
            url: 'layout/chartCount.php',
            method: 'GET',
            dataType: 'html',
            success: function (data) {
                $('#miChartCount').html(data);
            },
            error: function () {
                Swal.fire({
                    icon: 'error',
                    title: 'Error',
                    text: 'Hubo un problema al cargar el grafico de conteo.',
                    confirmButtonColor: "#00C201"
                });
            }
        });
    }

    function cargarDataTable() {
        $.ajax({
            url: 'layout/generalData_sql.php',
            method: 'GET',
            dataType: 'html',
            success: function (data) {
                $('#GdataTable').html(data);
            },
            error: function () {
                Swal.fire({
                    icon: 'error',
                    title: 'Error',
                    text: 'Hubo un problema al cargar la tabla general.',
                    confirmButtonColor: "#00C201"
                });
            }
        });
    }

    function cargarInsatisfaccion() {
        $.ajax({
            url: 'layout/insatisPorcentage.php',
            method: 'GET',
            dataType: 'html',
            success: function (data) {
                console.log(data);
                $('#insatisSubeBaja').html(data);
            },
            error: function () {
                Swal.fire({
                    icon: 'error',
                    title: 'Error',
                    text: 'Hubo un problema al cargar los porcentajes de insatisfaccion.',
                    confirmButtonColor: "#00C201"
                });
            }
        });
    }