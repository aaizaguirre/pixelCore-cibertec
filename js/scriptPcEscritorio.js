// BANNER
const contenedor = document.querySelector(".carrusel-contenedor");
const imagenes = document.querySelectorAll(".carrusel-contenedor img");

const btnPrev = document.querySelector(".prev");
const btnNext = document.querySelector(".next");

let currentIndex = 0;

function actualizarCarrusel(){
    const width = imagenes[0].clientWidth;
    contenedor.style.transform = `translateX(-${currentIndex * width}px)`;
}

function siguienteImagen(){
    currentIndex++;
   
    if(currentIndex >= imagenes.length){
        currentIndex = 0;
    }

    actualizarCarrusel();
}

function anteriorImagen(){
    currentIndex--;

    if(currentIndex < 0){
        currentIndex = imagenes.length - 1;
    }

    actualizarCarrusel();
}

btnNext.addEventListener("click", siguienteImagen);
btnPrev.addEventListener("click", anteriorImagen);

window.addEventListener("resize", actualizarCarrusel);

setInterval(siguienteImagen, 10000);

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