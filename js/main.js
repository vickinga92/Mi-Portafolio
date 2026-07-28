/**
 * Filtra los proyectos según la categoría seleccionada.
 */
function filterProjects(event, category) {
  const projects = document.querySelectorAll(".project-card");
  const buttons = document.querySelectorAll(".filter-btn");

  // Resetear estilos de los botones
  buttons.forEach((btn) => {
    btn.classList.remove("bg-sky-500", "text-white");
    btn.classList.add("bg-slate-800", "text-slate-300");
  });

  // Activar botón pulsado
  event.target.classList.remove("bg-slate-800", "text-slate-300");
  event.target.classList.add("bg-sky-500", "text-white");

  // Mostrar / Ocultar tarjetas
  projects.forEach((project) => {
    if (
      category === "all" ||
      project.getAttribute("data-category") === category
    ) {
      project.style.display = "flex";
    } else {
      project.style.display = "none";
    }
  });
}

/**
 * Control del Modal Lightbox para imágenes del proyecto.
 */
function openLightbox(src, caption) {
  const lightboxImg = document.getElementById("lightbox-img");
  const lightboxCaption = document.getElementById("lightbox-caption");
  const lightboxModal = document.getElementById("lightbox-modal");

  if (lightboxImg && lightboxCaption && lightboxModal) {
    lightboxImg.src = src;
    lightboxCaption.innerText = caption;
    lightboxModal.classList.remove("hidden");
    lightboxModal.classList.add("flex");
  }
}

function closeLightbox() {
  const lightboxModal = document.getElementById("lightbox-modal");
  if (lightboxModal) {
    lightboxModal.classList.add("hidden");
    lightboxModal.classList.remove("flex");
  }
}

/**
 * Animaciones de aparición en Scroll (Intersection Observer)
 */
document.addEventListener("DOMContentLoaded", () => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        }
      });
    },
    {
      threshold: 0.15,
    },
  );

  document.querySelectorAll(".fade-up").forEach((el) => {
    observer.observe(el);
  });
});
