let hora = 0;
let minuto = 0;
let segundo = 0;
const start = document.getElementById("start");
const stopp = document.getElementById("stop");
const reset = document.getElementById("reset");

start.addEventListener("click", function () {
  timer = true;
  iniciarcrono();
});

stopp.addEventListener("click", function () {
  timer = false;
});

reset.addEventListener("click", function () {
  timer = false;
  hora = 0;
  minuto = 0;
  segundo = 0;
  document.getElementById("hr").innerHTML = "00";
  document.getElementById("min").innerHTML = "00";
  document.getElementById("sec").innerHTML = "00";
});

function iniciarcrono() {
  if (timer) {
    segundo++;
  }

  if (segundo == 60) {
    minuto++;
    segundo = 0;
  }

  if (minuto == 60) {
    hora++;
    minuto = 0;
    segundo = 0;
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
  setTimeout(iniciarcrono, 1000);
}


