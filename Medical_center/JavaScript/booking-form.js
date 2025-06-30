document.addEventListener('DOMContentLoaded', function() {
    const bookingForm = document.querySelector('.appointment-form--booking form');
    
    if (bookingForm) {
        bookingForm.addEventListener('submit', function(e) {
            e.preventDefault();
            let isValid = true;
            
            // Валидация направления
            const direction = bookingForm.querySelector('select[name="direction"]');
            if (!direction.value) {
                showError(direction, 'Пожалуйста, выберите направление');
                isValid = false;
            } else {
                clearError(direction);
            }
            
            // Валидация имени
            const name = bookingForm.querySelector('input[name="name"]');
            if (!name.value.trim()) {
                showError(name, 'Пожалуйста, введите ваше имя');
                isValid = false;
            } else if (name.value.trim().length < 2) {
                showError(name, 'Имя должно содержать минимум 2 символа');
                isValid = false;
            } else {
                clearError(name);
            }
            
            // Валидация врача
            const doctor = bookingForm.querySelector('select[name="doctor"]');
            if (!doctor.value) {
                showError(doctor, 'Пожалуйста, выберите врача');
                isValid = false;
            } else {
                clearError(doctor);
            }
            
            // Валидация телефона
            const phone = bookingForm.querySelector('input[name="phone"]');
            const phoneRegex = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/;
            if (!phone.value.trim()) {
                showError(phone, 'Пожалуйста, введите ваш телефон');
                isValid = false;
            } else if (!phoneRegex.test(phone.value.trim())) {
                showError(phone, 'Пожалуйста, введите корректный номер телефона');
                isValid = false;
            } else {
                clearError(phone);
            }
            
            // Валидация чекбокса
            const checkbox = bookingForm.querySelector('input[type="checkbox"]');
            if (!checkbox.checked) {
                showError(checkbox, 'Необходимо ваше согласие');
                isValid = false;
            } else {
                clearError(checkbox);
            }
            
            if (isValid) {
                // Здесь можно отправить форму
                alert('Форма успешно отправлена! Мы свяжемся с вами в ближайшее время.');
                bookingForm.reset();
            }
        });
        
        // Добавляем маску для телефона
        const phoneInput = bookingForm.querySelector('input[name="phone"]');
        if (phoneInput) {
            phoneInput.addEventListener('input', function(e) {
                let value = e.target.value.replace(/\D/g, '');
                let formattedValue = '';
                
                if (value.length > 0) {
                    formattedValue = '+7 (' + value.substring(1, 4);
                }
                if (value.length >= 4) {
                    formattedValue += ') ' + value.substring(4, 7);
                }
                if (value.length >= 7) {
                    formattedValue += '-' + value.substring(7, 9);
                }
                if (value.length >= 9) {
                    formattedValue += '-' + value.substring(9, 11);
                }
                
                e.target.value = formattedValue;
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