(function () {
  const SELECTOR = "[data-swiper-el]";

  function initOne(container) {
    if (!container || container.__swiper) return;

    const instance = new Swiper(container, {
      slidesPerView: 1,
      spaceBetween: 8,
      loop: true,
      watchOverflow: true,
      centeredSlides: false,
      roundLengths: true,
      // Accesibilidad
      a11y: {
        enabled: true,
        prevSlideMessage: "Anterior",
        nextSlideMessage: "Siguiente",
        slideLabelMessage: "Diapositiva {{index}} de {{slidesLength}}",
      },
      // Teclado
      keyboard: { enabled: true },
      // Observers (por si cambia el layout)
      observer: true,
      observeParents: true,
      // Controles
      navigation: {
        nextEl: container.querySelector(".swiper-button-next"),
        prevEl: container.querySelector(".swiper-button-prev"),
      },
      pagination: {
        el: container.querySelector(".swiper-pagination"),
        clickable: true,
        dynamicBullets: true,
      },
      // Responsive
      breakpoints: {
        768: { slidesPerView: 1, spaceBetween: 12 },
        1024: { slidesPerView: 1, spaceBetween: 16 },
      },
    });

    container.__swiper = instance;
  }

  function initAll(root = document) {
    root.querySelectorAll(SELECTOR).forEach(initOne);
  }

  // Carga inicial
  document.addEventListener("DOMContentLoaded", () => initAll());

  // Soporte editor de temas
  document.addEventListener("shopify:section:load", (e) => initAll(e.target));
  document.addEventListener("shopify:section:select", (e) => initAll(e.target));
})();
