//*Laboratorio 3


var personas = [{ nombre: "Pepe", apellido: "Gonzalez" }, { nombre: "Maria", apellido: "Ginobili" }, { nombre: "Pablo", apellido: "Perez" }, { nombre: "Gimena", apellido: "Baron" }, { nombre: "Monica", apellido: "Argento" }, { nombre: "Pepe", apellido: "Argento" }];

var input = document.getElementById("search");
var button =document.getElementById("search_button");

button.addEventListener("click", resultado);
input.addEventListener("keyup", function (event) {
    if (event.keyCode === 13) {
        event.preventDefault();
        resultado();
    }
});
function resultado() {
    var resultado = [];
    var apellido = input.value;
   
    if (apellido != null && apellido != "") {
        for (let i = 0; i < personas.length; i++) {
            if (apellido.toLowerCase() === personas[i].apellido.toLowerCase()) {
                resultado.push(personas[i].nombre + " " + personas[i].apellido);
            }
        }
    
        if (resultado.length == 0) {
            Swal.fire({
                title:"No hay ningún nombre que corresponda con ese apellido.",
                icon: 'info'});
        } else {
            let lista_resultado = '<ul>';
            for(let i = 0; i<resultado.length;i++){
                lista_resultado += '<li>'+ resultado[i]+'</li>'
            }
            lista_resultado += '</ul>';
            Swal.fire({ 
                title:"Se encontraron los siguientes resultados",
                icon: 'info',
                html: lista_resultado
            });
        }
        input.value= input.defaultValue;
        //alert(mensaje);
    }
    
}







//var apellido=prompt("Ingrese apellido para buscar el nombre correspondiente: ");

/*
var resultado=[];
var apellido= input.value;
if (apellido != null && apellido != ""){
    for(let i = 0; i<personas.length;i++){
        if(apellido.toLowerCase() === personas[i].apellido.toLowerCase()){
            resultado.push(personas[i].nombre + " " + personas[i].apellido);
        }
    }
}else{
    window.location.href = "error.html";
}
var mensaje="";
if(resultado.length == 0){
    mensaje += "No hay ningún nombre que corresponda con ese apellido."
}else{
    mensaje += "Se encontraron los siguientes resultados:  ";
    mensaje += resultado.join(", ");
}
alert(mensaje);
//*Laboratorio 4
//*Proyecto integrador
*/