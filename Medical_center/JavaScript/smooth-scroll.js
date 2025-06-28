// Плавная прокрутка к якорным ссылкам
$(document).ready(function () {
    // Инициализация плавной прокрутки для всех ссылок с href, начинающимся с #
    $('a[href^="#"]').on('click', function (event) {
        event.preventDefault();

        // Получаем целевой элемент
        var target = $(this.getAttribute('href'));

        // Проверяем, существует ли целевой элемент
        if (target.length) {
            // Анимация прокрутки с эффектом из jQuery UI
            $('html, body').animate({
                scrollTop: target.offset().top
            }, 1000, 'easeInOutExpo');
        }
    });

    // Добавляем эффект при наведении на навигационные ссылки
    $('.navbar a, .footer-nav a').hover(
        function () {
            $(this).css('color', '#2a6496');
        },
        function () {
            $(this).css('color', '');
        }
    );
});