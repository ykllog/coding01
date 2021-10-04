$(function () {
    $('.hamburger').on('click', function() {
        $('body').toggleClass('open');
    });
    $('.smnav').on('click', function() {
        $('body').removeClass('open');
    });
})