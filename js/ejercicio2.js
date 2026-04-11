const persona = {
  nombre: "",
  edad: 0,
  dni: 0,
  sexo: "",
  peso: 0,
  altura: 0,

  mostrarGeneracion: function () {
    const añonacimiento = new Date().getFullYear() - this.edad;
    switch (añonacimiento) {
      case añonacimiento >= 1930 && añonacimiento <= 1948:
        alert(
          "Perteneces a la generación silenciosa, tu rasgo característico es la austeridad",
        );
        break;
      case añonacimiento >= 1949 && añonacimiento <= 1968:
        alert(
          "Perteneces a la generación baby boom, tu rasgo característico es la ambición",
        );
        break;
      case añonacimiento >= 1969 && añonacimiento <= 1980:
        alert(
          "Perteneces a la generación X, tu rasgo característico es la obsesión por el éxito",
        );
        break;
      case añonacimiento >= 1981 && añonacimiento <= 1993:
        alert(
          "Perteneces a la generación Y, tu rasgo característico es la frustración",
        );
        break;
      case añonacimiento >= 1994 && añonacimiento <= 2010:
        alert(
          "Perteneces a la generación Z, tu rasgo característico es la irreverencia",
        );
        break;
      default:
        alert("No se pudo determinar tu generación");
        break;
    }
  },

  esMayorDeEdad: function () {
    if (this.edad >= 18) {
      alert("Eres mayor de edad");
    } else {
      alert("Eres menor de edad");
    }
  },

  mostrarDatos: function () {
    alert(
      `Nombre: ${this.nombre}\nEdad: ${this.edad}\nDNI: ${this.dni}\nSexo: ${this.sexo}\nPeso: ${this.peso}\nAltura: ${this.altura}`,
    );
  },
};

const mostrarGeneracion = document.querySelector(".btn-success");
const mostrarDatos = document.querySelector(".btn-warning");
const formulario = document.getElementById("formulario");

mostrarGeneracion.addEventListener("click", persona.mostrarGeneracion);
mostrarDatos.addEventListener("click", persona.mostrarDatos);
formulario.addEventListener("submit", actualizarpersona);

function actualizarpersona(e) {
  e.preventDefault();
  const nombre = document.getElementById("nombre").value;
  const edad = parseInt(document.getElementById("edad").value);
  const dni = document.getElementById("dni").value;
  const sexo = document.getElementById("sexo").value;
  const peso = parseFloat(document.getElementById("peso").value);
  const altura = parseFloat(document.getElementById("altura").value);

  persona.nombre = nombre;
  persona.edad = edad;
  persona.dni = dni;
  persona.sexo = sexo;
  persona.peso = peso;
  persona.altura = altura;
  formulario.reset();
}
