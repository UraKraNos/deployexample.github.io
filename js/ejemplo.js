/*<!--Autor: Francisco Alejandro Rocha Vargas
    Fecha:10/10/2023-->
*/
/*<!--Autor: Francisco Alejandro Rocha Vargas
    Fecha:23/11/2023-->
*/
'use strict' //mejores practicas de programacion

function btnSumar(){
    var val1 = document.getElementById('txtval1').value;
    var val2 = document.getElementById('txtval2').value;
    var suma = 0;
    //alert(typeof val1);

    suma = parseInt(val1)+parseInt(val2);
    document.form1.txtRes.value = suma;
}