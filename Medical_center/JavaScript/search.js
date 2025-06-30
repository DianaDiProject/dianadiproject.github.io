$(document).ready(function () {
    const $searchContainer = $('.search-container');
    const $searchBtn = $('.search-btn');
    const $searchInput = $('.search-input');

    $searchBtn.on('click', () => {
        $searchContainer.toggleClass('active');
        if ($searchContainer.hasClass('active')) {
            $searchInput.focus();
        } else {
            $searchInput.val('');
        }
    });

    // Закрыть поиск по нажатию ESC
    $searchInput.on('keydown', function (e) {
        if (e.key === 'Escape' || e.keyCode === 27) {
            $searchContainer.removeClass('active');
            $searchInput.val('');
            $searchBtn.focus();
        }
    });
});
