const menu = document.querySelector(".menu");
const listamenu = document.querySelector(".menu-list");
const boton = document.querySelector(".menu-toggle");
const links = document.querySelectorAll(".menu-list a");
const body = document.querySelector("body ");

boton.addEventListener("click", () => {
  menu.classList.toggle("active");
});

links.forEach((link) => {
  link.addEventListener("click", () => {
    menu.classList.remove("active");
  });
});
// Cerrar el menú al hacer clic fuera de él
