/**
 * Функция для расчета по формуле y = (1 - x) / (x^2 - 9)
 * @param {number} x - Входное значение
 * @returns {number} Результат расчета
 * @throws {Error} Если возникает ошибка (деление на ноль и т.д.)
 */
function calculateFormula(x) {
    // Проверка на деление на ноль
    const denominator = Math.pow(x, 2) - 9;
    if (denominator === 0) {
        throw new Error('Ошибка: деление на ноль (x не может быть 3 или -3)');
    }

    // Проверка на другие возможные ошибки
    if (isNaN(x)) {
        throw new Error('Ошибка: введено нечисловое значение');
    }

    // Расчет результата
    const numerator = 1 - x;
    const result = numerator / denominator;

    return result;
}