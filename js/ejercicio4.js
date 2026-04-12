const fechalista = document.getElementById("fecha");
const reloj = document.getElementById("reloj");

const fecha = new Date()

const dia = fecha.getDate();
const nombreDia = fecha.toLocaleDateString('es-ES', { weekday: 'long' });
const nombreDiaCorregido = nombreDia.charAt(0).toUpperCase() + nombreDia.slice(1);
let mes = fecha.getMonth() + 1;
const año = fecha.getFullYear();

switch (mes) {
  case 1:
    mes = "Enero";
    break;
  case 2:
    mes = "Febrero";
    break;
  case 3:
    mes = "Marzo";
    break;  
  case 4:
    mes = "Abril";
    break;
  case 5:
    mes = "Mayo";
    break;
  case 6:
    mes = "Junio";
    break;
  case 7:
    mes = "Julio";
    break;
  case 8:
    mes = "Agosto";
    break;
  case 9:
    mes = "Septiembre";
    break;
  case 10:
    mes = "Octubre";
    break;
  case 11:
    mes = "Noviembre";
    break;
  case 12:
    mes = "Diciembre";
    break;
}

fechalista.textContent = `${nombreDiaCorregido} ${dia} de ${mes} de ${año}`;

const hora = document.getElementById("reloj");
setInterval(() => {
  const fecha = new Date();
  const segundos = fecha.getSeconds() < 10? `0${fecha.getSeconds()}`: fecha.getSeconds();
  const minutos = fecha.getMinutes() < 10? `0${fecha.getMinutes()}`: fecha.getMinutes();
  const horas = fecha.getHours() < 10? `0${fecha.getHours()}`: fecha.getHours();
  hora.innerHTML = `${horas}:${minutos}:${segundos}`;
}, 1000);