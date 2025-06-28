// Получаем все элементы с классом dropdown-toggle
const dropdownToggles = document.querySelectorAll('.dropdown-toggle');

dropdownToggles.forEach(toggle => {
    toggle.addEventListener('click', function (event) {
        event.preventDefault(); // Отменяем стандартное поведение ссылки
        const dropdown = this.nextElementSibling; // Находим следующий элемент (выпадающий список)

        // Закрываем все остальные выпадающие списки
        document.querySelectorAll('.dropdown').forEach(d => {
            if (d !== dropdown) {
                d.style.display = 'none';
            }
        });

        // Переключаем видимость текущего выпадающего списка
        dropdown.style.display = dropdown.style.display === 'block' ? 'none' : 'block';
    });
});

// Закрываем выпадающие списки при клике вне их
window.addEventListener('click', function (event) {
    if (!event.target.matches('.dropdown-toggle')) {
        document.querySelectorAll('.dropdown').forEach(d => {
            d.style.display = 'none';
        });
    }
});