//ejercicio 1 bordes a imagenes

document.getElementById("bordes").addEventListener("click", function () {
  var imagen = document.getElementById("bordes");
  // = (para dar valor a un variable), == (es para comparar el valor) , === (cuando son 3 es para comparar valor y typo de dato)
  if (imagen.style.border === "") {
    imagen.style.border = "2px solid red"; // Añade un borde rojo de 2 píxeles
  } else {
    imagen.style.border = ""; // Quita el borde
  }
});

//ejercicio 2 maximo de productos
let checkButton = document.querySelector("#resultados");

function checkTotal() {
  let num1 = document.querySelector("#mando1").value;
  let num2 = document.querySelector("#mando2").value;
  let num3 = document.querySelector("#mando3").value;

  let total = +num1 + +num2 + +num3;
  if (total <= 10) {
    document.querySelector("#parrafo").innerHTML = "llevas " + total;
  } else {
    document.querySelector("#parrafo").innerHTML =
      "llevas demasiados productos ";
  }
}

checkButton.addEventListener("click", checkTotal);

//ejercicio 3 password

//acceder al boton
let igual = document.querySelector("#esigual");
//acceder al parrafo
let parrafo = document.querySelector("#validacion");

//el usuario al hacer click al button ("#validacion")
igual.addEventListener("click", function () {
  //valores de los select
  let primerSelect = document.querySelector("#primerSelect").value;
  let segundoSelect = document.querySelector("#segundoSelect").value;
  let tecerSelect = document.querySelector("#tercerSelect").value;

  let password = primerSelect + segundoSelect + tecerSelect;

  //validar si cumple la condicion el password
  if (password == "911") {
    parrafo.innerHTML = "pasword 1 correcto";
  } else if (password == "714") {
    parrafo.innerHTML = "pasword 2 correcto";
  } else {
    parrafo.innerHTML = "password incorrecto";
  }
});
