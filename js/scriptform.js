$(document).ready(function() {
    // Para poder activar y desactivar las consolas de ayuda
    var debug = true;
    // para que nos carge las listas desplegable de select
    $('select').material_select();
    // para hacer la función submit con Ajax/JQuery
    // ponemos la id '#', class '.' o form 'form' para saber a lo que nos referimos
    // cuando aiga un ".submit" que haga una funció
    $('#addEmpresa').submit(function(event){
        // evita el refresh automatico que se produce al enviar el formulario
        event.preventDefault();
        // Imprimimos en log de la consola para saber si funciona
        if (debug) console.log("Se va a enviar formulario.")
        // Creamos una variable SERIALIZADO. le decimos que con la funcion SERIALIZE coja todas las IDs de addEmpresa
        var serializado = $("#addEmpresa").serialize();
        // Imprimimos en log de la consola para saber si funciona
        if (debug) console.log("Formulario serializado:" + serializado);
        // colocamos todos los datos en un ARRAY LIST (nombre/campo y valor/campo)
        var serializadoArray = $("#addEmpresa").serializeArray();
        // Le dedcimos que nos lo muestre en la consola
        if (debug) console.log("Variables array recogidas del formulario ==>");
        if (debug) console.log(serializadoArray);
        // Imprimir los datos en JSON
        var jsonData = JSON.stringify($("#addEmpresa").serializeArray());
        if (debug) console.log ("Datos en Json ==>");
        if (debug) console.log(jsonData);
        
        // Hacer una llamada de AJAX
        $.ajax({
            url: 'php/recibedatos.php',
            type: 'POST',
            dataType: 'json',
            // La variable donde estan los datos a tratar.
            data: jsonData,
            // Imprecindible para saber si hay errores i/o buen funcionamiento
            success: function(result){
                if (debug) {
                    //console.log(result.campos);
                    console.log(result.error);
                    console.log(result.sql);
                }
            },
            error: function(result){
                alert("ERROR!!!!!!!");
            }
        });
        

    });
});            