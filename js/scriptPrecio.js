// BARRA DESLIZANTE - PRECIOS (ASIDE)
const minPrecio = document.getElementById("minPrecio");
const maxPrecio = document.getElementById("maxPrecio");

const valorMin = document.getElementById("valorMin");
const valorMax = document.getElementById("valorMax");

minPrecio.addEventListener("input", () => {
    valorMin.textContent = minPrecio.value;
});

maxPrecio.addEventListener("input", () => {
    valorMax.textContent = maxPrecio.value;
});