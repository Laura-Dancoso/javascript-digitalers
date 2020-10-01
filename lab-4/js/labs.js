//*Laboratorio 4
var semestre_1 = [1,2,3];
var semestre_2 = [3,4,6];
var ventas_anual = [semestre_1,semestre_2];
var venta_anual_por_item=[];

for(let i =0; i<ventas_anual.length; i++){
    if(i==0){
        for(let e=0;e<ventas_anual[i].length;e++){
            venta_anual_por_item.push(ventas_anual[i][e]);
        }
    }else{
        for(let e=0;e<ventas_anual[i].length;e++){
            venta_anual_por_item[e] += ventas_anual[i][e];
        }
    }
}
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
    for(let i =0; i<ventas_anual.length;i++){
        html += '<tr>'
        html += '<th>'
        html += 'Semestre' + (i+1)
        html += '</th>'
        html += createTd(ventas_anual[i])
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
        html += createTd(venta_anual_por_item)
        html+= '</tr>'
    return html;
}