function comenzar() {
  console.log("¡Comenzó el juego!");
  console.log(numeromagico);
  btncomenzar.classList.add("d-none");
  titulo.textContent = "Adivina el número mágico entre 1 y 100";
  inputnumero.classList.remove("d-none");
  btnprobar.classList.remove("d-none");
}

function probar() {
  const numeroingresado = inputnumero.value;
  if (numeroingresado < numeromagico) {
    titulo.textContent = "El número mágico es mayor ☝🏼";
    btnprobar.textContent = "Probar otro número 😥";
  } else if (numeroingresado > numeromagico) {
    titulo.textContent = "El número mágico es menor 👇🏼";
    btnprobar.textContent = "Probar otro número 😥";
  } else {
    titulo.textContent = "¡Felicidades! Adivinaste el número mágico 🎉";
    btnprobar.classList.add("d-none");
    inputnumero.classList.add("d-none");
  }
}

const numeromagico = Math.floor(Math.random() * 100) + 1; //Número aleatorio entre 1 y 100
const titulo = document.querySelector("h1");
const btnprobar = document.querySelector(".btn-success");
const inputnumero = document.querySelector(".w-25");
const btncomenzar = document.getElementById("btncomenzar");

btncomenzar.addEventListener("click", comenzar);
btnprobar.addEventListener("click", probar);
