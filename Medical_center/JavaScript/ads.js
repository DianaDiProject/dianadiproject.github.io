// ads.js - Скрипт для показа рекламных окон

// Функция создания рекламного окна
function createAdPopup(content) {
    // Создаем элементы
    const overlay = document.createElement('div');
    const popup = document.createElement('div');
    const closeBtn = document.createElement('span');
    const contentDiv = document.createElement('div');

    // Настраиваем стили для overlay
    overlay.style.position = 'fixed';
    overlay.style.top = '0';
    overlay.style.left = '0';
    overlay.style.width = '100%';
    overlay.style.height = '100%';
    overlay.style.backgroundColor = 'rgba(0,0,0,0.5)';
    overlay.style.display = 'flex';
    overlay.style.justifyContent = 'center';
    overlay.style.alignItems = 'center';
    overlay.style.zIndex = '1000';

    // Настраиваем стили для popup
    popup.style.backgroundColor = 'white';
    popup.style.padding = '20px';
    popup.style.borderRadius = '10px';
    popup.style.position = 'relative';
    popup.style.maxWidth = '500px';
    popup.style.width = '80%';

    // Настраиваем кнопку закрытия
    closeBtn.innerHTML = '&times;';
    closeBtn.style.position = 'absolute';
    closeBtn.style.top = '10px';
    closeBtn.style.right = '15px';
    closeBtn.style.fontSize = '24px';
    closeBtn.style.cursor = 'pointer';

    // Добавляем контент
    contentDiv.innerHTML = content;

    // Собираем структуру
    popup.appendChild(closeBtn);
    popup.appendChild(contentDiv);
    overlay.appendChild(popup);

    // Добавляем в DOM
    document.body.appendChild(overlay);

    // Обработчик закрытия
    closeBtn.addEventListener('click', function () {
        document.body.removeChild(overlay);
    });

    // Закрытие при клике на overlay
    overlay.addEventListener('click', function (e) {
        if (e.target === overlay) {
            document.body.removeChild(overlay);
        }
    });
}

// Массив с рекламными сообщениями
const ads = [
    '<h3>Специальное предложение!</h3><p>Получите скидку 20% на первичный прием у любого специалиста при записи онлайн.</p>',
    '<h3>Акция недели!</h3><p>Комплексное обследование всего организма за 9990 руб. вместо 15000 руб.</p>',
    '<h3>Новая услуга!</h3><p>Теперь в нашем центре доступна МРТ-диагностика. Запишитесь на удобное время!</p>',
    '<h3>Для новых пациентов!</h3><p>Первичная консультация терапевта всего за 990 руб.</p>'
];

// Функция показа случайной рекламы
function showRandomAd() {
    const randomAd = ads[Math.floor(Math.random() * ads.length)];
    createAdPopup(randomAd);
}

// Показываем рекламу каждые 5 секунд
setInterval(showRandomAd, 120000);

// Показать первую рекламу через 5 секунд после загрузки страницы
setTimeout(showRandomAd, 5000);