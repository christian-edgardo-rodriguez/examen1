function botonIzquierdo() {
  var name;
  var last;
  
  name=$('#first-name').val();
  last=$('#last-name').val();
  
  var obj= {nombre:name, apellido:last};
  
  localStorage.setItem("persona", JSON.stringify(obj));
  
  console.log(JSON.parse(localStorage.persona).nombre);
}

function botonDerecho() {
  var imagen1 = $("#imagen1").css('background-image');
  var imagen2 = $("#imagen2").css('background-image');
  var imagen3 = $("#imagen3").css('background-image');
  var imagen4 = $("#imagen4").css('background-image');
  var imagen5 = $("#imagen5").css('background-image');
  var imagen6 = $("#imagen6").css('background-image');
  var imagen7 = $("#imagen7").css('background-image');
  document.getElementById('imagenCentro').style.backgroundImage = imagen3;
  document.getElementById('imagen1').style.backgroundImage = imagen7;
  document.getElementById('imagen2').style.backgroundImage = imagen1;
  document.getElementById('imagen3').style.backgroundImage = imagen2;
  document.getElementById('imagen4').style.backgroundImage = imagen3;
  document.getElementById('imagen5').style.backgroundImage = imagen4;
  document.getElementById('imagen6').style.backgroundImage = imagen5;
  document.getElementById('imagen7').style.backgroundImage = imagen6;
}