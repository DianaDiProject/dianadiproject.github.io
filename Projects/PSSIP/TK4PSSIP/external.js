/**
 * Функция для расчета значения y по формуле: y = (1 - x)/(x² - 9)
 * @param {number} x - Входное значение
 * @returns {number|string} Результат расчета или сообщение об ошибке
 */
function calculateY(x) {
    try {
        // Проверка на деление на ноль
        const denominator = Math.pow(x, 2) - 9;
        if (denominator === 0) {
            throw new Error("Ошибка: деление на ноль (знаменатель равен нулю)");
        }

        // Проверка на корень из отрицательного числа (если бы он был в формуле)
        // В данной формуле такой проверки не требуется, но оставлю для примера
        if (x < 0 && someCondition) {
            throw new Error("Ошибка: извлечение корня из отрицательного числа");
        }

        // Вычисление значения по формуле
        const numerator = 1 - x;
        const y = numerator / denominator;

        return y;
    } catch (error) {
        // Выводим сообщение об ошибке в диалоговое окно
        alert(error.message);
        // Возвращаем сообщение об ошибке для отображения в HTML
        return error.message;
    }
}