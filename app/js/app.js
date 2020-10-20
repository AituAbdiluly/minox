document.addEventListener('DOMContentLoaded', function () {
    // Custom JS

    const toggleBtn = document.querySelector('.js-toggle-mobile');
    const header = document.querySelector('.js-header-main');
    const nav = document.querySelector('.js-scroll');

    toggleBtn.addEventListener('click', function () {
        toggleBtn.classList.toggle('open');
        header.classList.toggle('mobile-open');
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
});
