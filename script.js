document.addEventListener("DOMContentLoaded", () => {
    // Botón CTA
    const ctaButton = document.querySelector(".cta-button");

    if (ctaButton) {
        ctaButton.addEventListener("click", () => {
            alert("Déjanos tu contacto y te daremos más información.");
        });
    }
});

