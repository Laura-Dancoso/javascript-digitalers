//entrada de datos
var nombre =prompt("Nombre: ");
var apellido =prompt("Apellido: ");
var edad =prompt("Edad: ");
//mensaje
if ((nombre== null || apellido== null  || edad== null ) || (nombre ==="" || apellido ==="" || edad==="")){
    var mensaje= "Sus datos son inválidos, refresque la página e intente nuevamente poniendo datos válidos."; 
}else{
    var mensaje= "Su nombre es " + nombre +", su apellido es " + apellido + " y su edad es " + edad + ".";
}
//salida de datos
alert(mensaje);
document.write(mensaje+"<br>");
console.log(mensaje);
//sumar números
var numero1= parseInt(prompt("Ingrese un número: "));
var numero2= parseInt(prompt("Ingrese otro número: "));

var suma=numero1+numero2;
var resta=numero1-numero2;
var multiplicacion= numero1*numero2;
var division= numero1/numero2;
document.write("La suma de ambos números es " + suma +"<br>");
document.write("La resta de ambos números es " + resta +"<br>");
document.write("La multiplicación de ambos números es " + multiplicacion +"<br>");
document.write("La división de ambos números es " + division+"<br>");