//*Laboratorio 1
var datos = ["Pepe", "Argento", new Date(1965, 11, 17).toLocaleDateString(), 2020 - new Date(1965, 11, 17).getFullYear()];
console.log("----------------------Laboratorio 1----------------------");
console.log(datos.length);
console.log(datos[1]);


//*Laboratorio 2
console.log("----------------------Laboratorio 2----------------------");
console.log("-------------------------Parte 1-------------------------");
for (let i=1; i<101;i++){
    console.log(i);
}
console.log("-------------------------Parte 2-------------------------");
for (let i = 0; i < datos.length; i++) {
    console.log(datos[i]);
}

//*Laboratorio 3
console.log("----------------------Laboratorio 3----------------------");

var personas = [{nombre:"Pepe", apellido:"Gonzalez"},{nombre:"Maria", apellido:"Ginobili"},{nombre:"Pablo", apellido:"Perez"},{nombre:"Gimena", apellido:"Baron"},{nombre:"Monica", apellido:"Argento"},{nombre:"Pepe", apellido:"Argento"}];

var apellido=prompt("Ingrese apellido para buscar el nombre correspondiente: ");
var resultado=[];
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
console.log(mensaje);
alert(mensaje);
//*Laboratorio 4
//*Proyecto integrador*/