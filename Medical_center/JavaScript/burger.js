// Мобильное меню
function toggleMobileMenu() {
    $('#navbar').toggleClass('active');
}

// Попап с контактами
function toggleContactsPopup() {
    $('#contactsPopup').toggleClass('active');
}

// Выпадающие меню в мобильной версии
function toggleDropdown(event) {
    if ($(window).width() <= 992) {
        event.preventDefault();
        const $dropdownToggle = $(event.target);
        const $dropdownContainer = $dropdownToggle.parent();
        const $dropdown = $dropdownContainer.find('.dropdown');

        $dropdownToggle.toggleClass('active');
        $dropdown.toggleClass('active');
    }
}

// Обработчик для клика вне попапа
$(window).on('click', function (event) {
    const $popup = $('#contactsPopup');
    if ($(event.target).is($popup)) {
        $popup.removeClass('active');
    }
});
