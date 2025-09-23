document.addEventListener('DOMContentLoaded', function () {
    // Inicialización del NUEVO carrusel deslizable y adaptable
    var swiper = new Swiper(".mySwiper", {
        loop: true,           // Habilitamos el loop infinito
        centeredSlides: true, // La diapositiva activa siempre estará en el centro
        grabCursor: true,     // Muestra un cursor de "mano" al pasar por encima
        spaceBetween: 15,     // Espacio entre cada imagen
        autoplay: {
            delay: 4000,
            disableOnInteraction: false,
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        // --- Clave para el diseño adaptable ---
        breakpoints: {
            // Cuando la pantalla es >= 0px (móviles)
            0: {
                slidesPerView: 1.25, // Muestra 1 imagen completa y un poco de la siguiente
            },
            // Cuando la pantalla es >= 768px (tablets)
            768: {
                slidesPerView: 2.5,
            },
            // Cuando la pantalla es >= 1024px (escritorio)
            1024: {
                slidesPerView: 3,
                spaceBetween: 20,
            },
        }
    });

    // Animación de aparición (fade-in) al hacer scroll (esto se mantiene igual)
    const faders = document.querySelectorAll('.fade-in');
    const appearOptions = {
        threshold: 0.2,
        rootMargin: "0px 0px -50px 0px"
    };
    const appearOnScroll = new IntersectionObserver(function(
        entries,
        appearOnScroll
    ) {
        entries.forEach(entry => {
            if (!entry.isIntersecting) {
                return;
            } else {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                appearOnScroll.unobserve(entry.target);
            }
        });
    }, appearOptions);

    faders.forEach(fader => {
        appearOnScroll.observe(fader);
    });
});
