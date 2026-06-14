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

btnNext.addEventListener("click", () =>{
    currentIndex++;

    if(currentIndex >= imagenes.length){
        currentIndex = 0;
    }

    actualizarCarrusel();
});

btnPrev.addEventListener("click", () => {
    currentIndex--;

    if(currentIndex < 0){
        currentIndex = imagenes.length - 1;
    }

    actualizarCarrusel();
});

window.addEventListener("resize", actualizarCarrusel());
setInterval(siguienteImagen, 10000);