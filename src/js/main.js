// Проверка скрипта
alert('Работает?');

// Бургер меню
(function () {
   const header = document.querySelector('.header');
   const icon = document.querySelector('.icon-container');
   icon.onclick = function () {
   header.classList.toggle('menu-open');
   }
}());
$(document).ready(function() {
    // Показать форму при загрузке страницы
    $('.forma').show();

    // Маска для номера телефона
    $('input[name="contact"]').mask('+7 (999) 999-99-99');

    // Изменение маски в зависимости от выбранного способа связи
    $('#connection').change(function() {
        if ($(this).val() === 'telegram') {
            $('input[name="contact"]').mask('@********');
            $('input[name="contact"]').attr('placeholder', '@username');
        } else {
            $('input[name="contact"]').mask('+7 (999) 999-99-99');
            $('input[name="contact"]').attr('placeholder', '+7 (___) ___-__-__');
        }
    });

    // Закрытие формы по клику на body
    $('body').click(function(event) {
        if (!$(event.target).closest('.forma').length) {
            $('.forma').hide();
        }
    });

    // Отправка формы
    $('#contactForm').submit(function(event) {
        event.preventDefault(); // Предотвращаем стандартное поведение формы

        if (!$('input[name="agree"]').is(':checked')) {
            alert('Пожалуйста, согласитесь с политикой обработки персональных данных.');
            return;
        }

        // Здесь можно добавить код для отправки данных на сервер

        alert('Данные отправлены!'); // Уведомление о успешной отправке

        // Закрываем форму
        $('.forma').hide();
    });
});

// document.addEventListener('DOMContentLoaded', function () {
//    const connectionSelect = document.getElementById('connection');
//    const telephoneInput = document.querySelector('input[name="telephone"]');
//    const form = document.querySelector('form');
//    const agreeCheckbox = document.querySelector('input[name="agree"]');

//    function applyPhoneMask(input) {
//        input.addEventListener('input', function () {
//            let value = this.value.replace(/\D/g, '');
//            if (value.length > 10) value = value.slice(0, 10);
//            this.value = '+7 (' + value.slice(0, 3) + ') ' + value.slice(3, 6) + '-' + value.slice(6, 8) + '-' + value.slice(8);
//        });
//    }

//    function applyTelegramMask(input) {
//        input.addEventListener('input', function () {
//            this.value = this.value.replace(/[^a-zA-Z0-9_@]/g, ''); // Allow only valid Telegram characters
//        });
//    }

//    applyPhoneMask(telephoneInput);

//    connectionSelect.addEventListener('change', function () {
//        if (this.value === 'telegram') {
//            telephoneInput.placeholder = '@username';
//            telephoneInput.value = '';
//            applyTelegramMask(telephoneInput);
//        } else {
//            telephoneInput.placeholder = '+7 (999) 999-99-99';
//            applyPhoneMask(telephoneInput);
//        }
//    });

//    form.addEventListener('submit', function (event) {
//        if (!agreeCheckbox.checked) {
//            event.preventDefault();
//            alert("Please agree to the privacy policy.");
//        } else {
//            this.parentElement.style.display = 'none'; // Hide form on submit
//        }
//    });

//    document.body.addEventListener('click', function (event) {
//        const formContainer = document.querySelector('.forma');
//        if (formContainer.style.display !== 'none' && !formContainer.contains(event.target)) {
//            formContainer.style.display = 'none'; // Hide form when clicking outside
//        }
//    });
// });
