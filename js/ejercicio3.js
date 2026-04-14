function creartarea(e) {
  e.preventDefault();
  const tarea = document.getElementById("tarea").value;
  const ul = document.querySelector(".list-group");
  ul.innerHTML += `
        <li class="list-group-item d-flex justify-content-between align-items-center">
            ${tarea} 
            <button class="btn btn-danger btn-borrar">Borrar Tarea</button>
        </li>`;
  formtarea.reset();
}

const formtarea = document.getElementById("formtarea");
const listaTareas = document.querySelector(".list-group");

formtarea.addEventListener("submit", creartarea);

// --- LÓGICA PARA ELIMINAR ---
listaTareas.addEventListener("click", (e) => {
  // Verificamos si el elemento clickeado tiene la clase de nuestro botón
  if (e.target.classList.contains("btn-borrar")) {
    // 'e.target' es el botón. 'parentElement' es el <li> que lo contiene.
    const liParaEliminar = e.target.parentElement;
    liParaEliminar.remove();
  }
});
