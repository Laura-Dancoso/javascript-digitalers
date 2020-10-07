//*Lab1
$('h1').text('Título');
$('.miParrafo').text('Párrafo.');
$('#idParrafo').text('Otro párrafo.')
//*Lab2
$('#alert').click(function (e) { 
  e.preventDefault();
  alert('Haz apretado el botón')
});
$('#titulo').click(function (e) { 
  e.preventDefault();
  $('h1').text('Haz cambiado el título')
});