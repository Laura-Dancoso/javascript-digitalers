//*arrays 
//formas de inicializar un array 
//array statico
//var array1 = [1,2];
//array dinamico
//var array2=[];
//array2[0]=1;
//array2[1]=2;
//console.log(array1[1])
//*Laboratorio 1
var datos = ["Pepe","Argento",new Date(1965,11,17).toLocaleDateString(),2020-new Date(1965,11,17).getFullYear()];
//console.log(datos.length);
//console.log(datos[1]);

//*for
//si no conozco el nro de iteraciones que tengo que hacer, me conviene el while o do while
//cuando sé cuantas veces tengo que iterar sí me sirve el for
for(var i = 0; i<datos.length; i++){
console.log(datos[i]);
}