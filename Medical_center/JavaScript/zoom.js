// Zoom изображений при наведении
document.addEventListener("DOMContentLoaded", function () {
    const zoomImages = document.querySelectorAll('.zoom-image');

    zoomImages.forEach(img => {
        img.addEventListener('mouseenter', function () {
            this.style.transform = 'scale(1.05)';
            this.style.transition = 'transform 0.3s ease';
        });

        img.addEventListener('mouseleave', function () {
            this.style.transform = 'scale(1)';
        });
    });
});