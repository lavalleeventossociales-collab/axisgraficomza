// --- LÓGICA DE ZOOM (LIGHTBOX) PARA AXIS GRÁFICO Mza ---

// 1. Selección de elementos con mayor compatibilidad
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const closeBtn = document.getElementById('close-btn') || document.querySelector('.close-lightbox');

// 2. Selección de todas las imágenes que deben tener zoom
const imagesToZoom = document.querySelectorAll('.img-zoom, .card-mundial img, .media-container img');

// 3. Función para abrir el lightbox
imagesToZoom.forEach(image => {
    // Aseguramos que el cursor cambie a la lupa
    image.style.cursor = 'zoom-in';

    image.addEventListener('click', () => {
        const src = image.getAttribute('src');
        
        if (lightbox && lightboxImg) {
            lightboxImg.src = src;
            // Quitamos 'hidden' y forzamos el display flex
            lightbox.classList.remove('hidden');
            lightbox.style.display = 'flex';
        }
    });
});

// 4. Función para cerrar el lightbox
function cerrarMenuZoom() {
    if (lightbox) {
        lightbox.classList.add('hidden');
        lightbox.style.display = 'none';
    }
}

// 5. Eventos de cierre
if (closeBtn) {
    closeBtn.addEventListener('click', cerrarMenuZoom);
}

// Cerrar al hacer clic en el fondo negro
if (lightbox) {
    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox) {
            cerrarMenuZoom();
        }
    });
}

// Cerrar con la tecla Escape
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        cerrarMenuZoom();
    }
});