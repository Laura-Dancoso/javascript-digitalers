//*Laboratorio 1
function sumar(a, b) {
  return [a + b, "suma"];
}

function restar(a, b) {
  return [a - b, "resta"];
}

function multiplicar(a, b) {
  return [a * b, "multiplicación"];
}

function dividir(a, b) {
  if (b != 0) {
    return [a / b, "división"];
  } else {
    return "error"
  }
}

function resultados() {

  var a = prompt("Ingrese un número");
  var b = prompt("Ingrese otro número");
  var resultado = "";
  var op = [sumar(a, b), restar(a, b), multiplicar(a, b), dividir(a, b)];
  if ((a != null && a != "") && (b != null && b != "")) {
    a = parseInt(a);
    b = parseInt(b);
    for (let i = 0; i < op.length; i++) {
      if (op[i] != "error") {
        ""
        resultado += 'El resultado de la ' + op[i][1] + ' es ' + op[i][0] + '.' + '\n';
      } else {
        resultado += 'No se puede dividir por 0.'
      }
    }
    return resultado;
  } else {
    return 'Datos no válidos'
  }
}
console.log(resultados());

//*Laboratorio 2
var textButtons = document.getElementsByClassName('text');
for(let i =0; i<textButtons.length;i++){
  textButtons[i].addEventListener('click', function(){
    document.getElementById('text').style.color=textButtons[i].dataset.color;
  })
}
var boxButtons = document.getElementsByClassName('box');
for(let i =0; i<boxButtons.length;i++){
  boxButtons[i].addEventListener('click', function(){
    document.getElementById('box').style.background=boxButtons[i].dataset.color;
  })
}


//.dataset.color