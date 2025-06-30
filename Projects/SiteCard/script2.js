const programImages = document.querySelectorAll('.program-image');
const descriptionBox = document.getElementById('descriptionBox');
const programTitle = document.getElementById('programTitle');

programImages.forEach(image => {
    image.addEventListener('mouseenter', () => {
        const programName = image.nextElementSibling.textContent; // Получаем название программы из соседнего элемента
        programTitle.textContent = programName; // Обновляем текст в специальном поле
    });

    image.addEventListener('mouseleave', () => {
        programTitle.textContent = 'Наведите на изображение, чтобы увидеть название'; // Сбрасываем текст
    });
});
