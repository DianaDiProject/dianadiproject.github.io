document.addEventListener('DOMContentLoaded', function () {
    const feedbackForm = document.querySelector('.appointment-form--feedback form');

    if (feedbackForm) {
        feedbackForm.addEventListener('submit', function (e) {
            e.preventDefault();
            let isValid = true;

            // Валидация имени
            const name = feedbackForm.querySelector('input[name="name"]');
            if (!name.value.trim()) {
                showError(name, 'Пожалуйста, введите ваше имя');
                isValid = false;
            } else if (name.value.trim().length < 2) {
                showError(name, 'Имя должно содержать минимум 2 символа');
                isValid = false;
            } else {
                clearError(name);
            }

            // Валидация email
            const email = feedbackForm.querySelector('input[name="email"]');
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!email.value.trim()) {
                showError(email, 'Пожалуйста, введите ваш email');
                isValid = false;
            } else if (!emailRegex.test(email.value.trim())) {
                showError(email, 'Пожалуйста, введите корректный email');
                isValid = false;
            } else {
                clearError(email);
            }

            // Валидация темы
            const topic = feedbackForm.querySelector('select[name="topic"]');
            if (!topic.value) {
                showError(topic, 'Пожалуйста, выберите тему обращения');
                isValid = false;
            } else {
                clearError(topic);
            }

            // Валидация сообщения
            const message = feedbackForm.querySelector('textarea[name="message"]');
            if (!message.value.trim()) {
                showError(message, 'Пожалуйста, введите ваше сообщение');
                isValid = false;
            } else if (message.value.trim().length < 10) {
                showError(message, 'Сообщение должно содержать минимум 10 символов');
                isValid = false;
            } else {
                clearError(message);
            }

            // Валидация чекбокса
            const checkbox = feedbackForm.querySelector('input[type="checkbox"]');
            if (!checkbox.checked) {
                showError(checkbox, 'Необходимо ваше согласие');
                isValid = false;
            } else {
                clearError(checkbox);
            }

            if (isValid) {
                // Здесь можно отправить форму
                alert('Ваше сообщение успешно отправлено! Мы ответим вам в течение 24 часов.');
                feedbackForm.reset();
            }
        });

        // Подсчет символов в сообщении
        const messageTextarea = feedbackForm.querySelector('textarea[name="message"]');
        if (messageTextarea) {
            const counter = document.createElement('div');
            counter.className = 'message-counter';
            counter.textContent = '0/500';
            messageTextarea.parentNode.appendChild(counter);

            messageTextarea.addEventListener('input', function () {
                const currentLength = this.value.length;
                counter.textContent = `${currentLength}/500`;

                if (currentLength > 500) {
                    counter.style.color = '#ff4444';
                    showError(this, 'Сообщение не должно превышать 500 символов');
                } else {
                    counter.style.color = '#ffffff';
                    clearError(this);
                }
            });
        }
    }

    function showError(input, message) {
        const formRow = input.closest('.form-row') || input.closest('.checkbox-label');
        if (!formRow) return;

        let error = formRow.querySelector('.error-message');
        if (!error) {
            error = document.createElement('div');
            error.className = 'error-message';
            formRow.appendChild(error);
        }

        error.textContent = message;
        input.style.border = '2px solid #ff4444';
        input.style.boxShadow = 'none';
    }

    function clearError(input) {
        const formRow = input.closest('.form-row') || input.closest('.checkbox-label');
        if (!formRow) return;

        const error = formRow.querySelector('.error-message');
        if (error) {
            error.remove();
        }

        input.style.border = '';
        input.style.boxShadow = '';
    }
});