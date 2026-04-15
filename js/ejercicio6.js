let hora = prompt("Ingrese la hora");
let minuto = prompt("Ingrese los minutos");
let segundo = prompt("Ingrese los segundos");
const horareset = hora;
const minutoreset = minuto;
const segundoreset = segundo;
let timer = false;
const start = document.getElementById("start");
const stopp = document.getElementById("stop");
const reset = document.getElementById("reset");
const hr = document.getElementById("hr");
const min = document.getElementById("min");
const sec = document.getElementById("sec");

if (hora < 10) {
  hr.textContent = "0" + hora;
} else {
  hr.textContent = hora;
}
if (minuto < 10) {
  min.textContent = "0" + minuto;
} else {
  min.textContent = minuto;
}
if (segundo < 10) {
  sec.textContent = "0" + segundo;
} else {
  sec.textContent = segundo;
}

start.addEventListener("click", function () {
  timer = true;
  iniciartemporizador();
});

stopp.addEventListener("click", function () {
  timer = false;
});

function iniciartemporizador() {
  if (timer) {
    segundo--;
  }

  if (segundo == 0) {
    minuto--;
    segundo = 59;
  }

  if (minuto == 0 && segundo == 0) {
    hora--;
    minuto = 59;
    segundo = 59;
  }

  let hrString = hora;
  let minString = minuto;
  let secString = segundo;

  if (hora < 10) {
    hrString = "0" + hrString;
  }

  if (minuto < 10) {
    minString = "0" + minString;
  }

  if (segundo < 10) {
    secString = "0" + secString;
  }

  document.getElementById("hr").innerHTML = hrString;
  document.getElementById("min").innerHTML = minString;
  document.getElementById("sec").innerHTML = secString;
  setTimeout(iniciartemporizador, 1000);
}

reset.addEventListener("click", function () {
  hora = horareset;
  minuto = minutoreset;
  segundo = segundoreset;
  if (hora < 10) {
    hr.textContent = "0" + hora;
  } else {
    hr.textContent = hora;
  }
  if (minuto < 10) {
    min.textContent = "0" + minuto;
  } else {
    min.textContent = minuto;
  }
  if (segundo < 10) {
    sec.textContent = "0" + segundo;
  } else {
    sec.textContent = segundo;
  }
});
