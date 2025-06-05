$(document).ready(function () {
    // Проверяем, было ли уже показано приветствие (используем localStorage)
    if (!localStorage.getItem('welcomeShown')) {
        // Создаем диалоговое окно
        $('<div title="Добро пожаловать!">\
            <p>Добро пожаловать в наш медицинский центр! 🏥</p>\
            <p>Здесь вы можете записаться на прием к врачу, узнать об акциях и услугах.</p>\
            <p>Спасибо, что выбрали нас!</p>\
        </div>').dialog({
            modal: true,
            width: 400,
            buttons: {
                "Понятно": function () {
                    $(this).dialog("close");
                    localStorage.setItem('welcomeShown', 'true'); // Запоминаем, что окно показано
                }
            }
        });
    }
});