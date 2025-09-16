document.addEventListener('DOMContentLoaded', function () {
    // Inicialización del carrusel MEJORADO (SwiperJS con efecto Coverflow)
    var swiper = new Swiper(".mySwiper", {
        effect: "coverflow", // Activamos el efecto
        grabCursor: true,    // Muestra un cursor de "mano" al pasar por encima
        centeredSlides: true, // La diapositiva activa siempre estará en el centro
        slidesPerView: "auto", // Swiper calculará cuántas diapositivas mostrar
        loop: true,           // Habilitamos el loop infinito
        autoplay: {
            delay: 3500, // Un poco más de tiempo entre diapositivas
            disableOnInteraction: false,
        },
        coverflowEffect: {
            rotate: 50,       // Rotación de las diapositivas laterales
            stretch: 0,
            depth: 100,       // Profundidad del efecto 3D
            modifier: 1,
            slideShadows: true, // Muestra sombras en las diapositivas
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
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
    },
    appearOptions);

    faders.forEach(fader => {
        appearOnScroll.observe(fader);
    });
});