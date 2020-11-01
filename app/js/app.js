document.addEventListener('DOMContentLoaded', function () {
    // Custom JS
    const toggleBtn = document.querySelector('.js-toggle-mobile');
    const header = document.querySelector('.js-header-main');
    const footer = document.querySelector('.footer');
    const main = document.querySelector('.main');
    const nav = document.querySelector('.js-scroll');

    toggleBtn.addEventListener('click', function (e) {
        toggleBtn.classList.toggle('open');
        header.classList.toggle('mobile-open');

        e.stopPropagation();
    });

    footer.addEventListener('click', function (e) {
        toggleBtn.classList.remove('open');
        header.classList.remove('mobile-open');
    });
    main.addEventListener('click', function (e) {
        toggleBtn.classList.remove('open');
        header.classList.remove('mobile-open');
    });

    header.addEventListener('click', () => {
        if (
            header.classList.contains('mobile-open') &&
            toggleBtn.classList.contains('open')
        ) {
            toggleBtn.classList.remove('open');
            header.classList.remove('mobile-open');
        }
    });

    window.onscroll = function () {
        'use strict';
        if (
            document.body.scrollTop >= 44 ||
            document.documentElement.scrollTop >= 44
        ) {
            nav.classList.add('scroll');
        } else {
            nav.classList.remove('scroll');
        }
    };

    lazyload(document.getElementsByClassName('lazy'));
});
