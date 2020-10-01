//*Laboratorio 4
var semestre_1 = [1,2,3];
var semestre_2 = [3,4,6];
var total_ventas_anual = [semestre_1,semestre_2];
var caramelos_ventas_anual=0;
var alfajores_ventas_anual=0;
var chocolates_ventas_anual=0;

for(let i =0; i<total_ventas_anual.length; i++){
    caramelos_ventas_anual += total_ventas_anual[i][0];
    alfajores_ventas_anual += total_ventas_anual[i][1];
    chocolates_ventas_anual += total_ventas_anual[i][2];
}

console.log("venta anual caramelos: " + caramelos_ventas_anual);
console.log("venta anual alfajores: " + alfajores_ventas_anual);
console.log("venta anual chocolates: " + chocolates_ventas_anual);
var tabla = document.getElementById("ventas");
tabla.innerHTML= createTable();

function createTable(){
    let html=createTHead();
    html += createTBody();
    html += createTAnual();
    return html;
}
function createTd(semestre){
    let html="";
    for(let i =0; i<semestre.length;i++){
        html += '<td>'
        html += semestre[i]
        html += '</td>'
    }
    return html;
}
function createTHead(){
    let html ="";
    html += '<thead class="thead-dark">'
    html += '<tr>'
    html += '<th></th>'
    html += '<th>Caramelos</th>'
    html += '<th>Alfajores</th>'
    html += '<th>Chocolates</th>'
    html += '</tr>'
    html += '</thead>'
    return html
}
function createTBody(){
    let html= "";
    html += '<tbody>'
    for(let i =0; i<total_ventas_anual.length;i++){
        html += '<tr>'
        html += '<th>'
        html += 'Semestre' + (i+1)
        html += '</th>'
        html += createTd(total_ventas_anual[i])
        html+= '</tr>'
    }
    html += '</tbody>'
    return html;
}
function createTAnual(){
    let html="";
    html += '<tr>'
        html += '<th>'
        html += 'Anual'
        html += '</th>'
        html += createTd([caramelos_ventas_anual,alfajores_ventas_anual,chocolates_ventas_anual])
        html+= '</tr>'
    return html;
}