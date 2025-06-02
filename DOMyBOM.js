const crearNumeroAleatorio = () => {
  console.log(NumeroAleatorio);
  const input = document.getElementById("miInput");
  input.focus();
};

const verificarNumero = (e) => {
  e.preventDefault();
  console.log(e);
  const NumeroIngresado = parseInt(document.getElementById("miInput").value);
  if (NumeroAleatorio === NumeroIngresado) {
    alert("Adivinaste el numero magico");
    location.reload();
  } else if (NumeroAleatorio > NumeroIngresado) {
    alert("El numero que tenes que adivinar es mayor al numero que ingresaste");
  } else if (NumeroAleatorio < NumeroIngresado) {
    alert("El numero que tenes que adivinar es menor al numero que ingresaste");
  }
  formulario.reset();
};

const NumeroAleatorio = Math.floor(Math.random() * 100) + 1;
const formulario = document.getElementById("miFormulario");
formulario.addEventListener("submit", verificarNumero);
