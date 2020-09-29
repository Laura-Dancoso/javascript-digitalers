//*1
var num1= parseInt(prompt("Ingrese el primer número entero: "));
var num2= parseInt(prompt("Ingrese el segundo número entero: "));
var mensaje;
if(isNaN(num1) || isNaN(num2)){
    mensaje="Alguno de los dos datos ingresados no es un número. Por favor refresque la página y vuelva a ingresar correctamente los datos."
}else if(num1>num2){
   mensaje="El número mayor es " + num1; 
}else if((num1==num2)){
    mensaje= "No hay mayor, son iguales";
}else{
    mensaje="El número mayor es " + num2;
}
alert(mensaje);
//*2
var nota = parseInt(prompt("Ingrese la nota para saber la condición del alumno: "));
if (isNaN(nota) || nota < 0 || nota > 10) {
    console.log("Alguno de los dos datos ingresados no es un número o es un número negativo. Por favor refresque la página y vuelva a ingresar correctamente los datos.")
} else if (nota >= 8) {
    console.log("Promocionado");
} else if (nota >= 6) {
    console.log("Aprobado")
} else {
    console.log("Desaprobado");
}
//*lab2
switch(new Date().getDay()){
    case 0:
        alert("Domingo");
        break;
    case 1:
        alert("Lunes");
        break;
    case 2:
        alert("Martes");
        break;
    case 3:
        alert("Miércoles");
        break;
    case 4:
        alert("Jueves");
        break;
    case 5:
        alert("Viernes");
        break;
    case 6:
        alert("Sábado");
        break;
    default:
        alert("Invalid day");
        break;
    }