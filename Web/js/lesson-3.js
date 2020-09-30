//*Arrays

//formas de inicializar un array 
//array statico
var numeros = [1,30,2,5,500,12];
//array dinamico
//var array2=[];
//array2[0]=1;
//array2[1]=2;
//console.log(numeros[1])

//*Métodos útiles para los arrays
//sort: ordena el array alfabéticamrnte
console.log("sort");
numeros.sort();
console.log(numeros);
//push: agrega un elemento al final
console.log("push");
numeros.push(3);
console.log(numeros);
//pop: remueve el último elemento
console.log("pop");
numeros.pop();
console.log(numeros);
//shift: borra el primer elemento
console.log("shift");
numeros.shift();
console.log(numeros);
//unshift: agrega un elemento al principio
console.log("unshift");
numeros.unshift(1);
console.log(numeros);
//splice: remueve los elemos a partir de un índice
console.log("splice");
numeros.splice(3);
console.log(numeros);
//también pueden ser dos parámentros
numeros.splice(1,2);
console.log(numeros); //desde el índice 1 hasta el 2 inclusive
//concat: une varios array en uno solo agregando al final el contenido del segundo, lo devuelve como otro array, no lo guarda en el primero
console.log("concat");
var array3 = ["77777777777"];
console.log(numeros.concat(array3));
//*Estructura iterativa: for
//si no conozco el nro de iteraciones que tengo que hacer, me conviene el while o do while
//cuando sé cuantas veces tengo que iterar sí me sirve el for

//*Objetos
var datos = ["Pepe", "Argento", new Date(1965, 11, 17).toLocaleDateString(), 2020 - new Date(1965, 11, 17).getFullYear()];
var ob = {name:datos[0], lastName: datos[1]}
console.log(ob.name + " " + ob.lastName)

//*Matrices
//simbolicamente se guardan valores de filas y columnas. Requiere dos índices
//los valores se representan con x e y
var persona1= ["jose","sanchez",45];
var persona2= ["palo","perez",44];
var empleados=[persona1,persona2];
console.log(empleados[1][1]);
for(var i=0; i<empleados.length;i++){
    console.log("Nombre fila " + i + ": " + empleados[i][0]);
}
for(var i=0; i<empleados.length;i++){
    console.log("Apellido fila " + i + ": " + empleados[i][1]);
}