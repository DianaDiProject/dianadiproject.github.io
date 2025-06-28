
// Создаем кнопку
    var scrollToTopBtn = document.createElement("button");
    scrollToTopBtn.innerHTML = "↑"; // Можно заменить на текст или другой символ
    scrollToTopBtn.id = "scrollToTopBtn";
    document.body.appendChild(scrollToTopBtn);

    // Стили для кнопки (можно изменить по своему вкусу)
    var css = `
    #scrollToTopBtn {
        position: fixed;
    bottom: 2%;
    right: 10%;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background: #333;
    color: white;
    border: none;
    cursor: pointer;
    font-size: 24px;
    display: none; /* Сначала скрыта */
    z-index: 99;
    opacity: 0.7;
    transition: opacity 0.3s;
}

    #scrollToTopBtn:hover {
        opacity: 1;
}
    `;

    // Добавляем стили в head
    var style = document.createElement("style");
    style.type = "text/css";
    style.appendChild(document.createTextNode(css));
    document.head.appendChild(style);

    // Показываем/скрываем кнопку при прокрутке
    window.onscroll = function() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        scrollToTopBtn.style.display = "block";
  } else {
        scrollToTopBtn.style.display = "none";
  }
};

    // Плавная прокрутка при клике
    scrollToTopBtn.addEventListener("click", function() {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
});
