document.addEventListener("DOMContentLoaded", () => {
    // Массив с классами кнопок и соответствующими URL-адресами
    const buttons = [
        { class: '.first__btn', url: 'first.html' },
        { class: '.second__btn', url: 'second.html' },
        { class: '.three__btn', url: 'third.html' },
        { class: '.four__btn', url: 'fourth.html' },
        { class: '.five__btn', url: 'fifth.html' },
        { class: '.six__btn', url: 'sixth.html' },
        { class: '.seven__btn', url: 'seventh.html' },
        { class: '.eight__btn', url: 'eighth.html' },
        { class: '.nine__btn', url: 'ninth.html' },
        { class: '.ten__btn', url: 'tenth.html' },
    ];

    // Добавление обработчиков событий для каждой кнопки
    buttons.forEach(button => {
        const btn = document.querySelector(button.class);
        if (btn) {
            btn.addEventListener('click', () => {
                window.location.href = button.url;
            });
        }
    });
});