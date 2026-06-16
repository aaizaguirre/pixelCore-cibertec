const botones = document.querySelectorAll(".btn");

botones.forEach(boton =>{
    boton.addEventListener("click", () =>{
        botones.forEach(btn => {
            btn.classList.remove("active");
        });

        boton.classList.add("active");
    })
})