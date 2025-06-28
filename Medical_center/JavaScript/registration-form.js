document.addEventListener('DOMContentLoaded', function () {
    const registrationForm = document.querySelector('.appointment-form--registration form');

    if (registrationForm) {
        registrationForm.addEventListener('submit', function (e) {
            e.preventDefault();
            let isValid = true;

            // Валидация имени
            const firstName = registrationForm.querySelector('input[name="first_name"]');
            if (!firstName.value.trim()) {
                showError(firstName, 'Пожалуйста, введите ваше имя');
                isValid = false;
            } else if (firstName.value.trim().length < 2) {
                showError(firstName, 'Имя должно содержать минимум 2 символа');
                isValid = false;
            } else {
                clearError(firstName);
            }

            // Валидация фамилии
            const lastName = registrationForm.querySelector('input[name="last_name"]');
            if (!lastName.value.trim()) {
                showError(lastName, 'Пожалуйста, введите вашу фамилию');
                isValid = false;
            } else if (lastName.value.trim().length < 2) {
                showError(lastName, 'Фамилия должна содержать минимум 2 символа');
                isValid = false;
            } else {
                clearError(lastName);
            }

            // Валидация email
            const email = registrationForm.querySelector('input[name="email"]');
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

            // Валидация телефона (необязательное поле)
            const phone = registrationForm.querySelector('input[name="phone"]');
            if (phone.value.trim()) {
                const phoneRegex = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/;
                if (!phoneRegex.test(phone.value.trim())) {
                    showError(phone, 'Пожалуйста, введите корректный номер телефона');
                    isValid = false;
                } else {
                    clearError(phone);
                }
            }

            // Валидация пароля
            const password = registrationForm.querySelector('input[name="password"]');
            if (!password.value) {
                showError(password, 'Пожалуйста, введите пароль');
                isValid = false;
            } else if (password.value.length < 6) {
                showError(password, 'Пароль должен содержать минимум 6 символов');
                isValid = false;
            } else {
                clearError(password);
            }

            // Валидация подтверждения пароля
            const confirmPassword = registrationForm.querySelector('input[name="confirm_password"]');
            if (!confirmPassword.value) {
                showError(confirmPassword, 'Пожалуйста, подтвердите пароль');
                isValid = false;
            } else if (confirmPassword.value !== password.value) {
                showError(confirmPassword, 'Пароли не совпадают');
                isValid = false;
            } else {
                clearError(confirmPassword);
            }

            // Валидация чекбокса
            const checkbox = registrationForm.querySelector('input[type="checkbox"]');
            if (!checkbox.checked) {
                showError(checkbox, 'Необходимо ваше согласие');
                isValid = false;
            } else {
                clearError(checkbox);
            }

            if (isValid) {
                // Здесь можно отправить форму
                alert('Регистрация прошла успешно! Добро пожаловать.');
                registrationForm.reset();
            }
        });

        // Добавляем подсказки для пароля
        const passwordInput = registrationForm.querySelector('input[name="password"]');
        if (passwordInput) {
            passwordInput.addEventListener('focus', function () {
                const hint = document.createElement('div');
                hint.className = 'password-hint';
                hint.textContent = 'Пароль должен содержать минимум 6 символов';
                passwordInput.parentNode.appendChild(hint);
            });

            passwordInput.addEventListener('blur', function () {
                const hint = passwordInput.parentNode.querySelector('.password-hint');
                if (hint) {
                    hint.remove();
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