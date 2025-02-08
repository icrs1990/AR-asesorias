document.querySelectorAll(".plan button").forEach(button => {
    button.addEventListener("click", () => {
        alert("Gracias por tu interés. Te contactaremos pronto.");
    });
});

document.querySelector(".boton-general").addEventListener("click", () => {
    alert("Déjanos tu contacto y te daremos más información.");
});
