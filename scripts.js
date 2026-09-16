const modal = document.getElementById("lightbox");
const closeButton = document.getElementById("lightboxClose");
const image = document.getElementById("lightboxImg");

const contenedores = document.querySelectorAll(".project-image");

for (let i = 0; i < contenedores.length; i++) {
    contenedores[i].addEventListener("click", function () {
        const miniatura = contenedores[i].querySelector("img");
        image.src = miniatura.dataset.full;
        modal.classList.add("active");
    });
}

function cerrarLightbox() {
    modal.classList.remove("active");
}

closeButton.addEventListener("click", cerrarLightbox);

modal.addEventListener("click",function (evento) {
    if (evento.target === modal) {
        cerrarLightbox();
    }
});

document.addEventListener("keydown", function(evento) {
    if (evento.key === "Escape") {
        cerrarLightbox();
    }
}
);