function showSection(sectionId) {
    const sections = document.querySelectorAll('.content-section');
    sections.forEach(section => {
        section.style.display = 'none'; // Oculta todas las secciones
    });

    document.getElementById(sectionId).style.display = 'block'; // Muestra la sección seleccionada
}

// Muestra la sección de inicio al cargar la página
document.addEventListener('DOMContentLoaded', () => {
    showSection('home');
});


// Animación al hacer scroll
document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll(".content-section");

    const options = {
        threshold: 0.2
    };

    const observer = new IntersectionObserver(function (entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
            } else {
                entry.target.classList.remove("show");
            }
        });
    }, options);

    sections.forEach(section => {
        observer.observe(section);
    });
});
