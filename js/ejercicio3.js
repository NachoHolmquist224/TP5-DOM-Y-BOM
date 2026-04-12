function creartarea(e) {
  e.preventDefault();
  const tarea = document.getElementById("tarea").value;
  const ul = document.querySelector(".list-group");
  ul.innerHTML += `<li class="list-group-item d-flex justify-content-between align-items-center">${tarea} <button class="btn btn-danger">Borrar Tarea</button></li>`;
  formtarea.reset();
}

const formtarea = document.getElementById("formtarea");
formtarea.addEventListener("submit", creartarea);
