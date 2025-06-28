document.addEventListener('DOMContentLoaded', function () {
    const slides = document.querySelectorAll('.slide');
    const nextButton = document.querySelector('.arrow-right');
    const prevButton = document.querySelector('.arrow-left');
    const sliderTrack = document.querySelector('.slider-track');

    let currentIndex = 0; // текущий индекс начала видимых слайдов
    const slidesToShow = 4; // показываем 4 слайда одновременно

    function updateSlider() {
        const slideWidth = slides[0].offsetWidth + 20; // ширина слайда + расстояние
        const offset = -(currentIndex * slideWidth);
        sliderTrack.style.transform = `translateX(${offset}px)`;
    }

    nextButton.addEventListener('click', () => {
        currentIndex++;
        if (currentIndex > slides.length - slidesToShow) {
            currentIndex = 0; // сбросить на начало
        }
        updateSlider();
    });

    prevButton.addEventListener('click', () => {
        currentIndex--;
        if (currentIndex < 0) {
            currentIndex = slides.length - slidesToShow; // перейти к последним слайдам
        }
        updateSlider();
    });

    // Показать первый набор слайдов
    updateSlider();
});
