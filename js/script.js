$(function () {
    $('.hamburger').on('click', function() {
        $('body').toggleClass('open');
    });
    $('.smnav').on('click', function() {
        $('body').removeClass('open');
    });
    $('.header a[href^="#"]').click(function(){
        let adjust = 125;
        let href= $(this).attr("href");
        let target = $(href == "#" || href == "" ? 'html' : href);
        let position = target.offset().top - adjust;
        $('body,html').animate({scrollTop:position}, 'swing');
    });
})