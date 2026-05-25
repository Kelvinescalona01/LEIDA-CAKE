// Simulación de envío del formulario
const form = document.getElementById("form-contacto");
const exito = document.getElementById("mensaje-exito");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  exito.style.display = "block";
  form.reset();
  setTimeout(() => {
    exito.style.display = "none";
  }, 4000);
});
